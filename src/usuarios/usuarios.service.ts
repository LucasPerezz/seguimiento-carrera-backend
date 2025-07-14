import {
  BadRequestException,
  Body,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDTO } from './dto/create-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async findById(id: number) {
    try {
      const usuario = await this.prisma.usuario.findFirst({
        where: {
          id: id,
        },
        omit: {
          contrasena: true,
        },
      });

      if (!usuario) throw new NotFoundException('Usuario no encontrado');

      return usuario;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error en el servidor');
    }
  }

  async create(@Body() usuario: CreateUsuarioDTO) {
    try {
      const { contrasena, email, username, rol } = usuario;

      const existsEmail = await this.prisma.usuario.findFirst({
        where: { email },
      });

      if (existsEmail)
        throw new BadRequestException(
          'Ya existe un usuario con el mismo email',
        );

      const existsUsername = await this.prisma.usuario.findFirst({
        where: { username },
      });

      if (existsUsername)
        throw new BadRequestException(
          'Ya existe un usuario con el mismo username',
        );

      const existsRol = await this.prisma.roles.findFirst({
        where: { id: rol },
      });

      if (!existsRol)
        throw new BadRequestException('El rol especificado no existe');

      const contrasenaEncode = await bcrypt.hash(contrasena, 10);

      const nuevoUsuario = await this.prisma.usuario.create({
        data: {
          username,
          email,
          contrasena: contrasenaEncode,
          rol: {
            connect: {
              id: rol,
            },
          },
        },
      });

      return nuevoUsuario;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Error en el servidor');
    }
  }
}

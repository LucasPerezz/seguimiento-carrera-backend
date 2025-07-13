import {
  BadRequestException,
  Body,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUsuarioDTO } from "./dto/create-usuario.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async findById(id: number) {
    const usuario = await this.prisma.usuario.findFirst({
      where: {
        id: id,
      },
    });

    if (!usuario) throw new NotFoundException("Usuario no encontrado");

    return usuario;
  }

  async create(@Body() usuario: CreateUsuarioDTO) {
    try {
      const { contrasena, email, username } = usuario;

      const existsEmail = await this.prisma.usuario.findFirst({
        where: {
          email: email,
        },
      });

      if (existsEmail)
        throw new BadRequestException(
          "Ya existe un usuario con el mismo email"
        );

      // Hacer lo mismo para username

      const contrasenaEncode = await bcrypt.hash(contrasena, 10);

      const nuevoUsuario = await this.prisma.usuario.create({
        data: {
          nombre: username,
          email: email,
          contrasena: contrasenaEncode,
        },
      });

      return nuevoUsuario;
    } catch (error) {
      throw new InternalServerErrorException("Error en el servidor");
    }
  }
}

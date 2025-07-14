import {
  Body,
  Controller,
  Get,
  Injectable,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDTO } from './dto/create-usuario.dto';

@Injectable()
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.usuariosService.findById(+id);
  }

  async create(@Body() usuario: CreateUsuarioDTO) {
    return await this.usuariosService.create(usuario);
  }
}

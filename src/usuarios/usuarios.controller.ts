import {
  Controller,
  Get,
  Injectable,
  InternalServerErrorException,
  Param,
} from "@nestjs/common";
import { UsuariosService } from "./usuarios.service";

@Injectable()
@Controller("usuarios")
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get(":id")
  async findById(@Param("id") id: string) {
    try {
    } catch (error) {
      throw new InternalServerErrorException("Error de servidor");
    }
  }
}

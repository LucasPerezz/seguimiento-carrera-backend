import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  InternalServerErrorException,
  Put,
} from "@nestjs/common";
import { MateriasService } from "./materias.service";
import { CreateMateriaDto } from "./dto/create-materia.dto";
import { UpdateMateriaDto } from "./dto/update-materia.dto";

@Controller("materias")
export class MateriasController {
  constructor(private readonly materiasService: MateriasService) {}

  @Get()
  async findAll() {
    return this.materiasService.findAll();
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return this.materiasService.findById(+id);
  }

  @Get("/codigo/:codigo")
  async findByCode(@Param("codigo") codigo: number) {
    return this.materiasService.findByCode(+codigo);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.materiasService.remove(+id);
  }

  @Post()
  async create(@Body() createMateriaDto: CreateMateriaDto) {
    try {
      return await this.materiasService.create(createMateriaDto);
    } catch (error) {
      throw new InternalServerErrorException("Error en el servidor");
    }
  }

  @Put(":id")
  async update(
    @Body() updateMateriaDto: UpdateMateriaDto,
    @Param("id") id: string
  ) {
    try {
      return this.materiasService.update(+id, updateMateriaDto);
    } catch (error) {
      throw new InternalServerErrorException("Error en el servidor");
    }
  }
}

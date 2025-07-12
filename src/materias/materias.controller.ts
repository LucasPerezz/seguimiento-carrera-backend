import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MateriasService } from './materias.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';

@Controller('materias')
export class MateriasController {
  constructor(private readonly materiasService: MateriasService) {}

  @Get()
  async findAll() {
    return this.materiasService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.materiasService.findById(+id);
  }

  @Get('/codigo/:codigo')
  findByCode(@Param('codigo') codigo: number) {
    return this.materiasService.findByCode(+codigo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materiasService.remove(+id);
  }
}

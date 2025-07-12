import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MateriasService {
  constructor(private prisma: PrismaService) {}

  create(createMateriaDto: CreateMateriaDto) {
    return 'This action adds a new materia';
  }

  findAll() {
    return this.prisma.materia.findMany({
      orderBy: {
        codigo: 'asc',
      },
    });
  }

  async findById(id: number) {
    const materia = await this.prisma.materia.findUnique({
      where: {
        id: id,
      },
    });

    if (!materia) throw new NotFoundException('Materia no encontrada');

    return materia;
  }

  async findByCode(codigo: number) {
    const materia = await this.prisma.materia.findFirst({
      where: {
        codigo: codigo,
      },
    });

    if (!materia) throw new NotFoundException('Materia no encontrada');

    return materia;
  }

  update(id: number, updateMateriaDto: UpdateMateriaDto) {
    return `This action updates a #${id} materia`;
  }

  remove(id: number) {
    return this.prisma.materia.delete({
      where: {
        id: id,
      },
    });
  }
}

import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateMateriaDto } from "./dto/create-materia.dto";
import { UpdateMateriaDto } from "./dto/update-materia.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class MateriasService {
  constructor(private prisma: PrismaService) {}

  async create(createMateriaDto: CreateMateriaDto) {
    const { codigo, estado, nombre, nota } = createMateriaDto;
    const materia = await this.prisma.materia.create({
      data: {
        codigo,
        estado,
        nombre,
        nota,
      },
    });
    return materia;
  }

  async findAll() {
    return await this.prisma.materia.findMany({
      orderBy: {
        codigo: "asc",
      },
    });
  }

  async findById(id: number) {
    const materia = await this.prisma.materia.findUnique({
      where: {
        id: id,
      },
    });

    if (!materia) throw new NotFoundException("Materia no encontrada");

    return materia;
  }

  async findByCode(codigo: number) {
    const materia = await this.prisma.materia.findFirst({
      where: {
        codigo: codigo,
      },
    });

    if (!materia) throw new NotFoundException("Materia no encontrada");

    return materia;
  }

  async update(id: number, updateMateriaDto: UpdateMateriaDto) {
    const { nombre, nota, codigo, estado } = updateMateriaDto;
    const materia = await this.prisma.materia.findFirst({
      where: {
        id: id,
      },
    });

    if (!materia) throw new NotFoundException("Materia no encontrada");

    const materiaActualizada = await this.prisma.materia.update({
      where: {
        id: id,
      },
      data: {
        nombre,
        codigo,
        estado,
        nota,
      },
    });

    return materiaActualizada;
  }

  async remove(id: number) {
    const materia = await this.prisma.materia.delete({
      where: {
        id: id,
      },
    });

    if (!materia) throw new NotFoundException("Materia no encontrada");

    return materia;
  }
}

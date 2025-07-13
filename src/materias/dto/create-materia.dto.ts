import { IsEnum, IsInt, IsString, Length, Max, Min } from "class-validator";
import { EstadoMateria } from "../entities/materia.entity";

export class CreateMateriaDto {
  @IsInt()
  @Min(0)
  @Max(9999)
  codigo: number;

  @IsString()
  @Length(3, 50)
  nombre: string;

  @IsInt()
  @Min(0)
  @Max(10)
  nota: number;

  @IsEnum(EstadoMateria)
  estado: EstadoMateria;
}

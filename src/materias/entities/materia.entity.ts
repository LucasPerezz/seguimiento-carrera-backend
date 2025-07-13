import { IsEnum, IsInt, IsString, Length, Max, Min } from "class-validator";

export enum EstadoMateria {
  APROBADO = "Aprobado",
  NO_APROBADO = "No aprobado",
  NO_DISPONIBLE = "No disponible",
  DISPONIBLE = "Disponible",
}

export class Materia {
  @IsInt()
  id: number;

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

import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';
import { Role } from 'src/roles/roles.enum';

export class CreateUsuarioDTO {
  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 20)
  contrasena: string;

  @IsString()
  @Length(4, 20)
  @IsAlphanumeric('ar')
  username: string;

  @IsNumber()
  rol: number;
}

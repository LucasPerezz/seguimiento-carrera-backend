import { IsAlphanumeric, IsEmail, IsString, Length } from "class-validator";

export class CreateUsuarioDTO {
  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 20)
  contrasena: string;

  @IsString()
  @Length(4, 20)
  @IsAlphanumeric("ar")
  username: string;
}

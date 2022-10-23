import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

/*
 * Entidade Usuário a ser validada no momento da inserção.
 * Todos os campos são obrigatórios.
 */

export class UserDTO {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsNotEmpty()
  @IsString()
  nomeusuario: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;

  @IsNotEmpty()
  @IsString()
  nomecompleto: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;

  @IsNotEmpty()
  @IsString()
  datacadastro: string;
}

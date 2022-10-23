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

export class PayloadDTO {
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
  nomecompleto: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;

  @IsNotEmpty()
  @IsString()
  datacadastro: string;

  @IsNotEmpty()
  @IsNumber()
  iat: number;

  @IsNotEmpty()
  @IsNumber()
  exp: number;
}

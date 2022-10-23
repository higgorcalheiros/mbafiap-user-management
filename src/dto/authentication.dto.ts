import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

/*
 * Entidade para Autenticação a ser validada no momento da inserção.
 * Os campos são obrigatórios e serão utilizados na geração do token JWT.
 */

export class AuthenticationDTO {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  senha: string;
}

import { IsNotEmpty, IsString } from 'class-validator';
import { AuthenticationDTO } from './authentication.dto';

/*
 * Entidade para Mudar a senha a ser validada no momento da inserção.
 * Os campos são obrigatórios e serão utilizados na gravação da nova senha.
 */

export class NovaSenhaDTO extends AuthenticationDTO {
  @IsNotEmpty()
  @IsString()
  novasenha: string;
}

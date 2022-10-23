import { Injectable } from '@nestjs/common';
import { AuthenticationDTO } from 'src/dto/authentication.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { NovaSenhaDTO } from 'src/dto/new-password.dto';
import { PayloadDTO } from 'src/dto/payload.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async generateToken(authenticationDetails: AuthenticationDTO) {
    const authenticated = await this.authenticateUser(authenticationDetails);
    const { id } = authenticationDetails;
    const user = await this.usersService.getUser(id);

    if (!authenticated) {
      throw new Error('Senha não confere');
    }
    return {
      access_token: this.jwtService.sign(user),
    };
  }

  public async changePassword(newPasswordDetails: NovaSenhaDTO) {
    const authenticated = await this.authenticateUser(newPasswordDetails);
    const { id, novasenha } = newPasswordDetails;

    if (!authenticated) {
      throw new Error('Senha não confere');
    }

    return this.usersService.updateUserPassword(id, novasenha);
  }

  public async validateToken(token: string): Promise<boolean> {
    const { id } = await this.jwtService.verify<PayloadDTO>(token);
    return id > 0;
  }

  private async authenticateUser(
    authenticationDetails: AuthenticationDTO,
  ): Promise<boolean> {
    const { id, senha } = authenticationDetails;
    const user = this.usersService.getUser(id);

    if (!user) return false;

    return await bcrypt.compare(senha, user.senha);
  }
}

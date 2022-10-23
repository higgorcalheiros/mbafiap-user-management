import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/dto/users.dto';
import * as bcrypt from 'bcrypt';

const users: UserDTO[] = [];

@Injectable()
export class UsersService {
  public async createUser(user: UserDTO): Promise<UserDTO> {
    user.senha = await this.hashing(user.senha);
    if (!user.id) {
      user.id = users[users.length - 1]?.id + 1 || 1;
    }

    users.push(user);
    return user;
  }

  public getUser(id: number): UserDTO | undefined {
    return users.filter((user) => user.id === id)[0];
  }

  public async updateUserPassword(
    id: number,
    password: string,
  ): Promise<UserDTO> {
    const user = this.getUser(id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    user.senha = await this.hashing(password);
    return user;
  }

  private async hashing(senha: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hash(senha, saltOrRounds);
  }
}

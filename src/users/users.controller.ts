import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from 'src/dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(@Body() user: UserDTO): Promise<UserDTO> {
    return this.usersService.createUser(user);
  }
}

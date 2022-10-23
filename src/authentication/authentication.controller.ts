import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthenticationDTO } from 'src/dto/authentication.dto';
import { NovaSenhaDTO } from 'src/dto/new-password.dto';
import { TokenDTO } from 'src/dto/token.dto';
import { UserDTO } from 'src/dto/users.dto';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post()
  async authenticateUser(
    @Body() authenticationDetails: AuthenticationDTO,
  ): Promise<{ access_token: string }> {
    try {
      return await this.authenticationService.generateToken(
        authenticationDetails,
      );
    } catch (err) {
      throw new BadRequestException(err?.message);
    }
  }

  @Post('change')
  async changePassword(
    @Body() changePasswordDetails: NovaSenhaDTO,
  ): Promise<UserDTO> {
    try {
      return await this.authenticationService.changePassword(
        changePasswordDetails,
      );
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Post('token')
  async validateToken(@Body() { token }: TokenDTO): Promise<boolean> {
    try {
      return await this.authenticationService.validateToken(token);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}

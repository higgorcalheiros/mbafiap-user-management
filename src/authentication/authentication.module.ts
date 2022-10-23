import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'superSegredoFIAP',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthenticationService, UsersService],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}

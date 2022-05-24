import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.user({ email: email });
    if (user && user.password === password) {
      return user;
    } else {
      return null;
    }
  }

  async login(user: User) {
    user = await this.validateUser(user.email, user.password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      token: this.jwtService.sign({ email: user.email, sub: user.id }),
    };
  }
}

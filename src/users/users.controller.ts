import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from './users.service';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: User) {
    return this.usersService.createUser(user);
  }

  @Get()
  findAll() {
    return this.usersService.users({});
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  getFromToken(@Req() req: Request) {
    return this.usersService.user({ id: req.user['id'] });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.user({ id: Number(id) });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: User) {
    return this.usersService.updateUser(
      {
        where: { id: Number(id) },
        data: user,
      }
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.deleteUser({ id: Number(id) });
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/user.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {}

  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    // const { ...userDetail, confirmPassword } = userDto;
    return this.usersService.createUser(userDto);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRespo: Repository<User>,
  ) {}

  findUsers() {}

  async createUser(userDto: CreateUserDto) {
    const newUser = await this.userRespo.create({
      ...userDto,
    });

    return this.userRespo.save(newUser);
  }
}

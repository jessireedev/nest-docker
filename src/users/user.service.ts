import { Injectable } from '@nestjs/common';
import { ErrorEnum } from '../enums';
import { ErrorHelper } from '../helpers';
import { CreateUserDto, UpdateUserDto, UserDto } from './user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findByIdAndThrow(userId: string): Promise<UserDto> {
    const user = await this.userRepository.findById(userId);

    if (user === null) {
      throw ErrorHelper.notFound(ErrorEnum.USER_NOT_FOUND);
    }

    return UserDto.entityToDtoFactory(user);
  }

  async create(data: CreateUserDto): Promise<UserDto> {
    return this.userRepository.create(data);
  }

  async updateById(userId: string, data: UpdateUserDto): Promise<UserDto> {
    await this.findByIdAndThrow(userId);
    await this.userRepository.updateById(userId, data);
    return this.findByIdAndThrow(userId);
  }
}

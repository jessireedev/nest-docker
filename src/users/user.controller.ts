import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, UserDto, UserIdDto } from './user.dto';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Controller({
  path: 'users',
})
export class UserController {
  constructor(
    private readonly userRepositoryService: UserRepository,
    private readonly userService: UserService,
  ) {}

  @Get(':id')
  async getUserById(@Param() params: UserIdDto): Promise<UserDto> {
    return this.userService.findByIdAndThrow(params.id);
  }

  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<UserDto> {
    return this.userService.create(data);
  }

  @Put(':id')
  async updateById(@Param() params: UserIdDto, @Body() data: UpdateUserDto): Promise<UserDto> {
    return this.userService.updateById(params.id, data);
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller({
  path: 'users',
})
export class UserController {
  constructor(private readonly userRepositoryService: UserRepository) {}

  @Get(':id')
  async getUserById(@Param() params: any): Promise<string> {
    // const user = await this.userRepositoryService.findById('fdsfsdf');
    // console.log(user);
    console.log(params.id);
    return params.id;
  }
}

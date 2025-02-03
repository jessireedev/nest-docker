import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(@InjectRepository(UserEntity) private userEntity: Repository<UserEntity>) {}

  async findById(userId: string): Promise<UserEntity | null> {
    return this.userEntity.findOneBy({ id: userId });
  }

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userEntity.save(new UserEntity(createUserDto));
  }

  async updateById(id: string, updateData: UpdateUserDto): Promise<UpdateResult> {
    return this.userEntity.update({ id }, updateData);
  }
}

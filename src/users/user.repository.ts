import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(@InjectRepository(UserEntity) private userEntity: Repository<UserEntity>) {}

  async findById(userId: string): Promise<UserEntity | null> {
    return this.userEntity.findOneBy({ id: userId });
  }
}

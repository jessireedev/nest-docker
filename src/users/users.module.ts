import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [TypeOrmModule],
  providers: [UserRepository],
  controllers: [UserController],
})
export class UsersModule {}

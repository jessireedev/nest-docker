import { IsBoolean, IsString } from 'class-validator';
import { UserEntity } from './user.entity';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}

export class UpdateUserDto extends CreateUserDto {
  @IsBoolean()
  isActive: boolean;
}

export class UserDto extends UpdateUserDto {
  @IsString()
  id: string;

  static entityToDtoFactory(user: UserEntity): UserDto {
    const dto = new UserDto();
    dto.id = user.id;
    dto.firstName = user.firstName;
    dto.lastName = user.lastName;
    dto.isActive = user.isActive;

    return dto;
  }
}

export class UserIdDto {
  @IsString()
  id: string;
}

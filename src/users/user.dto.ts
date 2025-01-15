import { IsBoolean, IsString } from 'class-validator';

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
}

export class UserIdDto {
  @IsString()
  id: string;
}

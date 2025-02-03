import { Injectable } from '@nestjs/common';
import { HealthDto } from './dto';
import { HealthStatusEnum } from './enums/health.enum';

@Injectable()
export class AppService {
  getHealth(): HealthDto {
    return {
      status: HealthStatusEnum.OK,
    };
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthDto } from './dto/health.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealth(): HealthDto {
    return this.appService.getHealth();
  }
}

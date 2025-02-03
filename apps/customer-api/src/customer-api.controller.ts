import { Controller, Get } from '@nestjs/common';
import { CustomerApiService } from './customer-api.service';

@Controller()
export class CustomerApiController {
  constructor(private readonly customerApiService: CustomerApiService) {}

  @Get()
  getHello(): string {
    return this.customerApiService.getHello();
  }
}

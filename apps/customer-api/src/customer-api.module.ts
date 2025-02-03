import { Module } from '@nestjs/common';
import { CustomerApiController } from './customer-api.controller';
import { CustomerApiService } from './customer-api.service';

@Module({
  imports: [],
  controllers: [CustomerApiController],
  providers: [CustomerApiService],
})
export class CustomerApiModule {}

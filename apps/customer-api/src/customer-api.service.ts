import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerApiService {
  getHello(): string {
    return 'Hello World!';
  }
}

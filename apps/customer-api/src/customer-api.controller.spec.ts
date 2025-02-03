import { Test, TestingModule } from '@nestjs/testing';
import { CustomerApiController } from './customer-api.controller';
import { CustomerApiService } from './customer-api.service';

describe('CustomerApiController', () => {
  let customerApiController: CustomerApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CustomerApiController],
      providers: [CustomerApiService],
    }).compile();

    customerApiController = app.get<CustomerApiController>(CustomerApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(customerApiController.getHello()).toBe('Hello World!');
    });
  });
});

import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorEnum } from '../enums';

export class ErrorHelper {
  static notFound(message: ErrorEnum): HttpException {
    return new HttpException(message, HttpStatus.NOT_FOUND);
  }
}

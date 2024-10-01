import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch()
export class GlobalExceptionFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();

    if (exception instanceof QueryFailedError) {
      // Treats duplicate key value error message
      const detail: string | null = exception.driverError?.detail;
      const [, duplicateKey] = detail?.match(/^Key \(([^)]+)\)=\(.+\) already exists.$/) ?? [];
      if (duplicateKey) {
        response
          .status(400)
          .json({
            "message": [
              `property ${duplicateKey} should be unique`
            ],
            "error": "Bad Request",
            "statusCode": 400
          });
      }
    }

    super.catch(exception, host);
  }
}
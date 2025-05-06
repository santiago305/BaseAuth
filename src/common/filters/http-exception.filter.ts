import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { status } from '../constants'; 

@Catch(HttpException)
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const statusCode = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    let type = status.ERROR;
    let message = 'Error desconocido';

    if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
      if ((exceptionResponse as any).type) {
        type = (exceptionResponse as any).type;
      }
      if ((exceptionResponse as any).message) {
        const extractedMessage = (exceptionResponse as any).message;
        message = Array.isArray(extractedMessage)
          ? extractedMessage.join(' | ')
          : extractedMessage;
      }
    } else if (typeof exceptionResponse === 'string') {
      message = exceptionResponse;
    }

    response.status(statusCode).json({
      type,
      message,
    });
  }
}

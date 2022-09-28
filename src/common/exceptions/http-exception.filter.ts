// 기존의 node-express로 작업했을 떄
// 만들었던  errorcode로 이해하면 편할 것 같다.
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    //
    const error = exception.getResponse() as
      | string
      | { error: string; statusCode: number; message: string | string[] };

    // 에러가 있을 경우
    // statusCode, timestamp, path, error를 반환

    // error가 strin일 경우와 아닌 경우를 분기를 다르게 작업
    if (typeof error === 'string') {
      response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(), // js에서 제공하는 new date()를 ISO 형식으로 변환
        path: request.url,
        error,
      });
    } else {
      response.status(status).json({
        success: false,
        timestamp: new Date().toISOString(),
        ...error,
      });
    }
  }
}

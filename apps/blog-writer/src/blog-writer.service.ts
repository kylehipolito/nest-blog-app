import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogWriterService {
  getHello(): string {
    return 'Hello World!';
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeFeedService {
  getHello(): string {
    return 'Hello World!';
  }
}

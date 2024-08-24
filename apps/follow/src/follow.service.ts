import { Injectable } from '@nestjs/common';

@Injectable()
export class FollowService {
  getHello(): string {
    return 'Hello World!';
  }
}

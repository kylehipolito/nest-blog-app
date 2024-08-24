import { Controller, Get } from '@nestjs/common';
import { BlogWriterService } from './blog-writer.service';

@Controller()
export class BlogWriterController {
  constructor(private readonly blogWriterService: BlogWriterService) {}

  @Get()
  getHello(): string {
    return this.blogWriterService.getHello();
  }
}

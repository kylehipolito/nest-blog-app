import { Test, TestingModule } from '@nestjs/testing';
import { BlogWriterController } from './blog-writer.controller';
import { BlogWriterService } from './blog-writer.service';

describe('BlogWriterController', () => {
  let blogWriterController: BlogWriterController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BlogWriterController],
      providers: [BlogWriterService],
    }).compile();

    blogWriterController = app.get<BlogWriterController>(BlogWriterController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(blogWriterController.getHello()).toBe('Hello World!');
    });
  });
});

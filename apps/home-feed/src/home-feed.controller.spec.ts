import { Test, TestingModule } from '@nestjs/testing';
import { HomeFeedController } from './home-feed.controller';
import { HomeFeedService } from './home-feed.service';

describe('HomeFeedController', () => {
  let homeFeedController: HomeFeedController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HomeFeedController],
      providers: [HomeFeedService],
    }).compile();

    homeFeedController = app.get<HomeFeedController>(HomeFeedController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(homeFeedController.getHello()).toBe('Hello World!');
    });
  });
});

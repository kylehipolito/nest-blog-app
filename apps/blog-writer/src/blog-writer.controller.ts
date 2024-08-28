import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BlogWriterService } from './blog-writer.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { JwtAuthGuard } from '@app/common/guards';
import { CurrentUser } from '@app/common/decorators';
import { User } from '@app/common/entities';

@UseGuards(JwtAuthGuard)
@Controller('blog-writer')
export class BlogWriterController {
  constructor(private readonly blogWriterService: BlogWriterService) {}

  @Post()
  create(
    @Body() createBlogDto: Omit<CreateBlogDto, 'authorId'>,
    @CurrentUser() user: User,
  ) {
    return this.blogWriterService.create({
      ...createBlogDto,
      authorId: user.id,
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogWriterService.update(id, updateBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogWriterService.delete(id);
  }
}

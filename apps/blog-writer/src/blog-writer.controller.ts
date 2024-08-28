import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogWriterService } from './blog-writer.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blog-writer')
export class BlogWriterController {
  constructor(private readonly blogWriterService: BlogWriterService) {}

  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogWriterService.create(createBlogDto);
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

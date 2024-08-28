import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateBlogDto {
  @IsUUID()
  authorId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  body: string;

  tags?: string[];
}

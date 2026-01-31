import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}
  
  create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: {
        title: createPostDto.title,
        content: createPostDto.content,
        authorId: createPostDto.authorId,
      }
    })
  }

  findAll() {
    return this.prisma.post.findMany({
      include: {author: true, comments: true}
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.prisma.post.findUnique({where: {id}});
    if(!post) throw new NotFoundException('Post not found');

    return this.prisma.post.update({
      where: {id},
      data: updatePostDto,
    })
  }

  async remove(id: number) {
    const post = await this.prisma.post.findUnique({where: {id}});
    if(!post) throw new NotFoundException('Post not found');

    return this.prisma.post.delete({
      where: {id},
    })
  }
}

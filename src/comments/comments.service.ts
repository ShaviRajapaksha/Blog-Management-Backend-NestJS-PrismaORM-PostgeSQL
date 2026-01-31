import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  create(createCommentDto: CreateCommentDto) {
    return this.prisma.comment.create({
      data: createCommentDto,
    })
  }

  findAll() {
    return this.prisma.comment.findMany({
      include: {user:true, post:true}
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const comment = await this.prisma.post.findUnique({where: {id}});
    if(!comment) throw new NotFoundException('Comment not found');

    return this.prisma.comment.update({
      where: {id},
      data: updateCommentDto,
    });
  }

  async remove(id: number) {
    const comment = await this.prisma.comment.findUnique({where: {id}});
    if(!comment) throw new NotFoundException('Comment not found');

    return this.prisma.comment.delete({
      where: {id},
    });
  }
}

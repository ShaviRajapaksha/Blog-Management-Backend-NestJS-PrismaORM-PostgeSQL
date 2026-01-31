import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {posts: true, comments: true},
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({ where: {id} });
    if(!user) throw new NotFoundException('User not found');

    return this.prisma.user.update({
      where: {id},
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    const user = await this.prisma.user.findUnique({where: {id}});
    if(!user) throw new NotFoundException('User not found');

    return this.prisma.user.delete({
      where: {id},
    });
  }
}

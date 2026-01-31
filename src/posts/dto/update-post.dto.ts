import { PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdatePostDto extends PartialType(CreatePostDto) {
    @IsOptional()
    title?: string | undefined;

    @IsOptional()
    content?: string | undefined;

    @IsOptional()
    @IsBoolean()
    published?: boolean;
}

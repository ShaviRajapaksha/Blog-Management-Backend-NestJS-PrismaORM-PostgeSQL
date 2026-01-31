import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreatePostDto {
    @IsNotEmpty()
    @ApiProperty({
        example: "Posting an article",
        description: "Title",
    })
    title: string;

    @IsNotEmpty()
    @ApiProperty({
        example: "Content of the post",
        description: "content",
    })    
    content: string;

    @IsInt()
    @ApiProperty({
        example: "2",
        description: "author id",
    })     
    authorId: number;
}

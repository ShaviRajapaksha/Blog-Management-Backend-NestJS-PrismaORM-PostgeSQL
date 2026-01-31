import { IsInt, IsNotEmpty } from "class-validator";

export class CreateCommentDto {
    @IsNotEmpty()
    content: string;

    @IsInt()
    postId: number;

    @IsInt()
    userId: number;
}

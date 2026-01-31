import { IsEmail, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    example: "Sam Perera",
    description: "Full name of the user",
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "sam@gmail.com",
    description: "Valid email address of the user",
  })
  @IsEmail()
  email: string;
}

import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateEntrepreneurDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsBoolean()
    @IsOptional()
    active: boolean = true;
}

import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateEntrepreneurDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    phone: string;

    @IsString()
    @IsOptional()
    address: string;

    @IsBoolean()
    @IsOptional()
    active: boolean = true;
}

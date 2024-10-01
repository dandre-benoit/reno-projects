import { IsBoolean, IsNumber, IsDateString, IsNotEmpty, IsOptional, IsString, IsNotIn } from "class-validator";

export class CreateProjectDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsOptional()
    description?: string;
    
    @IsNumber()
    @IsOptional()
    budget?: number;
    
    @IsDateString()
    @IsOptional()
    startAt?: Date;
    
    @IsDateString()
    @IsOptional()
    endAt?: Date;
    
    @IsBoolean()
    @IsOptional()
    active: boolean = true;
}

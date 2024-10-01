import { PartialType } from '@nestjs/mapped-types';
import { CreateEntrepreneurDto } from './create-entrepreneur.dto';

export class UpdateEntrepreneurDto extends PartialType(CreateEntrepreneurDto) {}

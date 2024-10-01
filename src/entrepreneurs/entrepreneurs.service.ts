import { Injectable } from '@nestjs/common';
import { CreateEntrepreneurDto } from './dto/create-entrepreneur.dto';
import { UpdateEntrepreneurDto } from './dto/update-entrepreneur.dto';

@Injectable()
export class EntrepreneursService {
  create(createEntrepreneurDto: CreateEntrepreneurDto) {
    return 'This action adds a new entrepreneur';
  }

  findAll() {
    return `This action returns all entrepreneurs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entrepreneur`;
  }

  update(id: number, updateEntrepreneurDto: UpdateEntrepreneurDto) {
    return `This action updates a #${id} entrepreneur`;
  }

  remove(id: number) {
    return `This action removes a #${id} entrepreneur`;
  }
}

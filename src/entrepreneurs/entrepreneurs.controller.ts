import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntrepreneursService } from './entrepreneurs.service';
import { CreateEntrepreneurDto } from './dto/create-entrepreneur.dto';
import { UpdateEntrepreneurDto } from './dto/update-entrepreneur.dto';

@Controller('entrepreneurs')
export class EntrepreneursController {
  constructor(private readonly entrepreneursService: EntrepreneursService) {}

  @Post()
  create(@Body() createEntrepreneurDto: CreateEntrepreneurDto) {
    return this.entrepreneursService.create(createEntrepreneurDto);
  }

  @Get()
  findAll() {
    return this.entrepreneursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entrepreneursService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntrepreneurDto: UpdateEntrepreneurDto) {
    return this.entrepreneursService.update(+id, updateEntrepreneurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entrepreneursService.remove(+id);
  }
}

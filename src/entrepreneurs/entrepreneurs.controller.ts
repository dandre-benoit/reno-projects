import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { EntrepreneursService } from '@/entrepreneurs/entrepreneurs.service';
import { CreateEntrepreneurDto } from '@/entrepreneurs/dto/create-entrepreneur.dto';
import { UpdateEntrepreneurDto } from '@/entrepreneurs/dto/update-entrepreneur.dto';
import { Entrepreneur } from '@/entrepreneurs/entities/entrepreneur.entity';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('entrepreneurs')
export class EntrepreneursController {
  constructor(private readonly entrepreneursService: EntrepreneursService) {}

  @Get()
  findAll(): Observable<Entrepreneur[]> {
    return this.entrepreneursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<Entrepreneur> {
    return this.entrepreneursService.findOne(id);
  }

  @Post()
  create(@Body() createEntrepreneurDto: CreateEntrepreneurDto): Observable<Entrepreneur> {
    return this.entrepreneursService.create(createEntrepreneurDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateEntrepreneurDto: UpdateEntrepreneurDto
  ): Observable<UpdateResult> {
    return this.entrepreneursService.update(id, updateEntrepreneurDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: number
  ): Observable<DeleteResult> {
    return this.entrepreneursService.delete(id);
  }
}

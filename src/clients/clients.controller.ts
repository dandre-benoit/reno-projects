import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { Client } from '@/clients/entities/client.entity';
import { ClientsService } from '@/clients/clients.service';
import { CreateClientDto } from '@/clients/dto/create-client.dto';
import { UpdateClientDto } from '@/clients/dto/update-client.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Observable } from 'rxjs';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  findAll(): Observable<Client[]> {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<Client> {
    return this.clientsService.findOne(id);
  }

  @Post()
  create(@Body() createClientDto: CreateClientDto): Observable<Client> {
    return this.clientsService.create(createClientDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateClientDto: UpdateClientDto
  ): Observable<UpdateResult> {
    return this.clientsService.update(id, updateClientDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: number
  ): Observable<DeleteResult> {
    return this.clientsService.delete(id);
  }
}

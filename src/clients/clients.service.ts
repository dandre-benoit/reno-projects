import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClientDto } from '@/clients/dto/create-client.dto';
import { UpdateClientDto } from '@/clients/dto/update-client.dto';
import { Client } from '@/clients/entities/client.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';

@Injectable()
export class ClientsService {

  constructor(
    @InjectRepository(Client)
    private readonly clientsRepository: Repository<Client>
  ) { }

  findAll(): Observable<Client[]> {
    return from(
      this.clientsRepository.find({
        select: ['id', 'name'],
        where: { active: true },
        order: { id: 'asc' }
      })
    );
  }

  findOne(id: number): Observable<Client> {
    return from(
      this.clientsRepository.findOneByOrFail({ id })
    );
  }

  create(createClientDto: CreateClientDto): Observable<Client> {
    return from(
      this.clientsRepository.save(createClientDto)
    );
  }

  update(id: number, updateClientDto: UpdateClientDto): Observable<UpdateResult> {
    return from(
      this.clientsRepository.update({ id }, <UpdateClientDto>{
        ...updateClientDto,
        updatedAt: new Date,
      })
    );
  }

  delete(id: number): Observable<DeleteResult> {
    return from(
      this.clientsRepository.delete({ id })
    );
  }
}

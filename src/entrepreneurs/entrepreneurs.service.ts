import { Injectable } from '@nestjs/common';
import { CreateEntrepreneurDto } from '@/entrepreneurs/dto/create-entrepreneur.dto';
import { UpdateEntrepreneurDto } from '@/entrepreneurs/dto/update-entrepreneur.dto';
import { Entrepreneur } from '@/entrepreneurs/entities/entrepreneur.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';

@Injectable()
export class EntrepreneursService {

  constructor(
    @InjectRepository(Entrepreneur)
    private readonly projectsRepository: Repository<Entrepreneur>
  ) { }

  findAll(): Observable<Entrepreneur[]> {
    return from(
      this.projectsRepository.find({
        select: ['id', 'name'],
        where: { active: true },
        order: { id: 'asc' }
      })
    );
  }

  findOne(id: number): Observable<Entrepreneur> {
    return from(
      this.projectsRepository.findOneByOrFail({ id })
    );
  }

  create(createEntrepreneurDto: CreateEntrepreneurDto): Observable<Entrepreneur> {
    return from(
      this.projectsRepository.save(createEntrepreneurDto)
    );
  }

  update(id: number, updateEntrepreneurDto: UpdateEntrepreneurDto): Observable<UpdateResult> {
    return from(
      this.projectsRepository.update({ id }, <UpdateEntrepreneurDto>{
        ...updateEntrepreneurDto,
        updatedAt: new Date,
      })
    );
  }

  delete(id: number): Observable<DeleteResult> {
    return from(
      this.projectsRepository.delete({ id })
    );
  }
}

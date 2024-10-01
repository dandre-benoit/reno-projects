import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectDto } from '@/projects/dto/create-project.dto';
import { UpdateProjectDto } from '@/projects/dto/update-project.dto';
import { Project } from '@/projects/entities/project.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';

@Injectable()
export class ProjectsService {

  constructor(
    @InjectRepository(Project)
    private readonly projectsRepository: Repository<Project>
  ) { }

  findAll(): Observable<Project[]> {
    return from(
      this.projectsRepository.findBy({ active: true })
    );
  }

  findOne(id: number): Observable<Project> {
    return from(
      this.projectsRepository.findOneByOrFail({ id })
    );
  }

  create(createProjectDto: CreateProjectDto): Observable<Project> {
    return from(
      this.projectsRepository.save(createProjectDto)
    );
  }

  update(id: number, updateProjectDto: UpdateProjectDto): Observable<UpdateResult> {
    return from(
      this.projectsRepository.update({ id }, {
        ...updateProjectDto,
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
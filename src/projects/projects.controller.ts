import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from '@/projects/entities/project.entity';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) { }

  @Get()
  findAll(): Observable<Project[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<Project> {
    return this.projectsService.findOne(id);
  }

  @Post()
  create(@Body() createProjectDto: CreateProjectDto): Observable<Project> {
    return this.projectsService.create(createProjectDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateProjectDto: UpdateProjectDto
  ): Observable<UpdateResult> {
    return this.projectsService.update(id, updateProjectDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: number
  ): Observable<DeleteResult> {
    return this.projectsService.delete(id);
  }
}

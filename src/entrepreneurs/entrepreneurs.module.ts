import { Module } from '@nestjs/common';
import { EntrepreneursService } from '@/entrepreneurs/entrepreneurs.service';
import { EntrepreneursController } from '@/entrepreneurs/entrepreneurs.controller';
import { Entrepreneur } from '@/entrepreneurs/entities/entrepreneur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Entrepreneur])],
  controllers: [EntrepreneursController],
  providers: [EntrepreneursService],
})
export class EntrepreneursModule {}

import { Module } from '@nestjs/common';
import { ClientsService } from '@/clients/clients.service';
import { ClientsController } from '@/clients/clients.controller';
import { Client } from '@/clients/entities/client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}

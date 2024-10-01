import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ProjectsModule } from '@/projects/projects.module';
import { ClientsModule } from '@/clients/clients.module';
import { EntrepreneursModule } from '@/entrepreneurs/entrepreneurs.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USERNAME'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        autoLoadEntities: true,
        synchronize: true, // Never use in prod
      })
    }),
    ProjectsModule,
    ClientsModule,
    EntrepreneursModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MateriasModule } from './materias/materias.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [MateriasModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MateriasModule } from './materias/materias.module';
import { PrismaService } from './prisma/prisma.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CarrerasModule } from './carreras/carreras.module';
import { PlanesModule } from './planes/planes.module';
import { EstadoMateriasModule } from './estado-materias/estado-materias.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MateriasModule, UsuariosModule, CarrerasModule, PlanesModule, EstadoMateriasModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

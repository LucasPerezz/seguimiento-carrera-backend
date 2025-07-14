import { Controller } from '@nestjs/common';
import { CarrerasService } from './carreras.service';

@Controller('carreras')
export class CarrerasController {
  constructor(private readonly carrerasService: CarrerasService) {}
}

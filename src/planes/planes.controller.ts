import { Controller } from '@nestjs/common';
import { PlanesService } from './planes.service';

@Controller('planes')
export class PlanesController {
  constructor(private readonly planesService: PlanesService) {}
}

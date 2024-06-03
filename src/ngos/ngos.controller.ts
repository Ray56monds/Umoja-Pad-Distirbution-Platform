import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { NGOsService } from './ngos.service';
import { Prisma } from '@prisma/client';
import * as Joi from 'joi';
import { JoiValidationPipe } from '../common/pipes/joi-validation.pipe';

const createNGOSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
  contact: Joi.string().required(),
  email: Joi.string().required().email(),
  schoolId: Joi.number().required(),
});

@Controller('ngos')
export class NGOsController {
  constructor(private readonly ngosService: NGOsService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(createNGOSchema))
  async createNGO(@Body() ngoData: Prisma.NGOCreateInput) {
    return this.ngosService.createNGO(ngoData);
  }

  @Get()
  async getAllNGOs() {
    return this.ngosService.getAllNGOs();
  }

  @Get(':id')
  async getNGOById(@Param('id') id: number) {
    return this.ngosService.getNGOById(id);
  }

  @Put(':id')
  @UsePipes(new JoiValidationPipe(createNGOSchema))
  async updateNGO(
    @Param('id') id: number,
    @Body() updateData: Prisma.NGOUpdateInput,
  ) {
    return this.ngosService.updateNGO(id, updateData);
  }

  @Delete(':id')
  async deleteNGO(@Param('id') id: number) {
    return this.ngosService.deleteNGO(id);
  }
}

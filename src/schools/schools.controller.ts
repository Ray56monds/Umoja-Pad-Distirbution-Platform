// src/schools/schools.controller.ts
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
import { SchoolsService } from './schools.service';
import { Prisma } from '@prisma/client';
import * as Joi from 'joi';
import { JoiValidationPipe } from '../common/pipes/joi-validation.pipe';

const createSchoolSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
});

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(createSchoolSchema))
  async createSchool(@Body() schoolData: Prisma.SchoolCreateInput) {
    return this.schoolsService.createSchool(schoolData);
  }

  @Get()
  async getAllSchools() {
    return this.schoolsService.getAllSchools();
  }

  @Get(':id')
  async getSchoolById(@Param('id') id: number) {
    return this.schoolsService.getSchoolById(id);
  }

  @Put(':id')
  @UsePipes(new JoiValidationPipe(createSchoolSchema))
  async updateSchool(
    @Param('id') id: number,
    @Body() updateData: Prisma.SchoolUpdateInput,
  ) {
    return this.schoolsService.updateSchool(id, updateData);
  }

  @Delete(':id')
  async deleteSchool(@Param('id') id: number) {
    return this.schoolsService.deleteSchool(id);
  }
}

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
import { BeneficiariesService } from './beneficiaries.service';
import { Prisma } from '@prisma/client';
import * as Joi from 'joi';
import { JoiValidationPipe } from '../common/pipes/joi-validation.pipe';

const createBeneficiarySchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  needs: Joi.string().required(),
  schoolId: Joi.number().required(),
});

@Controller('beneficiaries')
export class BeneficiariesController {
  constructor(private readonly beneficiariesService: BeneficiariesService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(createBeneficiarySchema))
  async createBeneficiary(
    @Body() beneficiaryData: Prisma.BeneficiaryCreateInput,
  ) {
    return this.beneficiariesService.createBeneficiary(beneficiaryData);
  }

  @Get()
  async getAllBeneficiaries() {
    return this.beneficiariesService.getAllBeneficiaries();
  }

  @Get(':id')
  async getBeneficiaryById(@Param('id') id: number) {
    return this.beneficiariesService.getBeneficiaryById(id);
  }

  @Put(':id')
  @UsePipes(new JoiValidationPipe(createBeneficiarySchema))
  async updateBeneficiary(
    @Param('id') id: number,
    @Body() updateData: Prisma.BeneficiaryUpdateInput,
  ) {
    return this.beneficiariesService.updateBeneficiary(id, updateData);
  }

  @Delete(':id')
  async deleteBeneficiary(@Param('id') id: number) {
    return this.beneficiariesService.deleteBeneficiary(id);
  }
}

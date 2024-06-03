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
import { DistributionEventsService } from './distribution-events.service';
import { Prisma } from '@prisma/client';
import * as Joi from 'joi';
import { JoiValidationPipe } from '../common/pipes/joi-validation.pipe';

const createDistributionEventSchema = Joi.object({
  date: Joi.date().required(),
  location: Joi.string().required(),
  ngoId: Joi.number().required(),
  schoolId: Joi.number().required(),
});

@Controller('distribution-events')
export class DistributionEventsController {
  constructor(
    private readonly distributionEventsService: DistributionEventsService,
  ) {}

  @Post()
  @UsePipes(new JoiValidationPipe(createDistributionEventSchema))
  async createDistributionEvent(
    @Body() distributionEventData: Prisma.DistributionEventCreateInput,
  ) {
    return this.distributionEventsService.createDistributionEvent(
      distributionEventData,
    );
  }

  @Get()
  async getAllDistributionEvents() {
    return this.distributionEventsService.getAllDistributionEvents();
  }

  @Get(':id')
  async getDistributionEventById(@Param('id') id: number) {
    return this.distributionEventsService.getDistributionEventById(id);
  }

  @Put(':id')
  @UsePipes(new JoiValidationPipe(createDistributionEventSchema))
  async updateDistributionEvent(
    @Param('id') id: number,
    @Body() updateData: Prisma.DistributionEventUpdateInput,
  ) {
    return this.distributionEventsService.updateDistributionEvent(
      id,
      updateData,
    );
  }

  @Delete(':id')
  async deleteDistributionEvent(@Param('id') id: number) {
    return this.distributionEventsService.deleteDistributionEvent(id);
  }
}

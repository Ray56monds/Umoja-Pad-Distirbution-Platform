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
import { InventoryItemsService } from './inventory-items.service';
import { Prisma } from '@prisma/client';
import * as Joi from 'joi';
import { JoiValidationPipe } from '../common/pipes/joi-validation.pipe';

const createInventoryItemSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  quantity: Joi.number().required(),
  distributionEventId: Joi.number().required(),
});

@Controller('inventory-items')
export class InventoryItemsController {
  constructor(private readonly inventoryItemsService: InventoryItemsService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(createInventoryItemSchema))
  async createInventoryItem(
    @Body() inventoryItemData: Prisma.InventoryItemCreateInput,
  ) {
    return this.inventoryItemsService.createInventoryItem(inventoryItemData);
  }

  @Get()
  async getAllInventoryItems() {
    return this.inventoryItemsService.getAllInventoryItems();
  }

  @Get(':id')
  async getInventoryItemById(@Param('id') id: number) {
    return this.inventoryItemsService.getInventoryItemById(id);
  }

  @Put(':id')
  @UsePipes(new JoiValidationPipe(createInventoryItemSchema))
  async updateInventoryItem(
    @Param('id') id: number,
    @Body() updateData: Prisma.InventoryItemUpdateInput,
  ) {
    return this.inventoryItemsService.updateInventoryItem(id, updateData);
  }

  @Delete(':id')
  async deleteInventoryItem(@Param('id') id: number) {
    return this.inventoryItemsService.deleteInventoryItem(id);
  }
}

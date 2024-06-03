import { Module } from '@nestjs/common';
import { InventoryItemsService } from './inventory-items.service';
import { InventoryItemsController } from './inventory-items.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [InventoryItemsService, PrismaService],
  controllers: [InventoryItemsController],
})
export class InventoryItemsModule {}

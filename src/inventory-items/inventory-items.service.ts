import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, InventoryItem } from '@prisma/client';

@Injectable()
export class InventoryItemsService {
  constructor(private prisma: PrismaService) {}

  async createInventoryItem(
    data: Prisma.InventoryItemCreateInput,
  ): Promise<InventoryItem> {
    return this.prisma.inventoryItem.create({ data });
  }

  async getAllInventoryItems(): Promise<InventoryItem[]> {
    return this.prisma.inventoryItem.findMany();
  }

  async getInventoryItemById(id: number): Promise<InventoryItem | null> {
    return this.prisma.inventoryItem.findUnique({ where: { id } });
  }

  async updateInventoryItem(
    id: number,
    data: Prisma.InventoryItemUpdateInput,
  ): Promise<InventoryItem> {
    return this.prisma.inventoryItem.update({ where: { id }, data });
  }

  async deleteInventoryItem(id: number): Promise<InventoryItem> {
    return this.prisma.inventoryItem.delete({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, DistributionEvent } from '@prisma/client';

@Injectable()
export class DistributionEventsService {
  constructor(private prisma: PrismaService) {}

  async createDistributionEvent(
    data: Prisma.DistributionEventCreateInput,
  ): Promise<DistributionEvent> {
    return this.prisma.distributionEvent.create({ data });
  }

  async getAllDistributionEvents(): Promise<DistributionEvent[]> {
    return this.prisma.distributionEvent.findMany();
  }

  async getDistributionEventById(
    id: number,
  ): Promise<DistributionEvent | null> {
    return this.prisma.distributionEvent.findUnique({ where: { id } });
  }

  async updateDistributionEvent(
    id: number,
    data: Prisma.DistributionEventUpdateInput,
  ): Promise<DistributionEvent> {
    return this.prisma.distributionEvent.update({ where: { id }, data });
  }

  async deleteDistributionEvent(id: number): Promise<DistributionEvent> {
    return this.prisma.distributionEvent.delete({ where: { id } });
  }
}

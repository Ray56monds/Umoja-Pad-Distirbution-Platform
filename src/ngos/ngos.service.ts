import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, NGO } from '@prisma/client';

@Injectable()
export class NGOsService {
  constructor(private prisma: PrismaService) {}

  async createNGO(data: Prisma.NGOCreateInput): Promise<NGO> {
    return this.prisma.ngo.create({ data });
  }

  async getAllNGOs(): Promise<NGO[]> {
    return this.prisma.ngo.findMany();
  }

  async getNGOById(id: number): Promise<NGO | null> {
    return this.prisma.ngo.findUnique({ where: { id } });
  }

  async updateNGO(id: number, data: Prisma.NGOUpdateInput): Promise<NGO> {
    return this.prisma.ngo.update({ where: { id }, data });
  }

  async deleteNGO(id: number): Promise<NGO> {
    return this.prisma.ngo.delete({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Beneficiary } from '@prisma/client';

@Injectable()
export class BeneficiariesService {
  constructor(private prisma: PrismaService) {}

  async createBeneficiary(
    data: Prisma.BeneficiaryCreateInput,
  ): Promise<Beneficiary> {
    return this.prisma.beneficiary.create({ data });
  }

  async getAllBeneficiaries(): Promise<Beneficiary[]> {
    return this.prisma.beneficiary.findMany();
  }

  async getBeneficiaryById(id: number): Promise<Beneficiary | null> {
    return this.prisma.beneficiary.findUnique({ where: { id } });
  }

  async updateBeneficiary(
    id: number,
    data: Prisma.BeneficiaryUpdateInput,
  ): Promise<Beneficiary> {
    return this.prisma.beneficiary.update({ where: { id }, data });
  }

  async deleteBeneficiary(id: number): Promise<Beneficiary> {
    return this.prisma.beneficiary.delete({ where: { id } });
  }
}

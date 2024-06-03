// src/schools/schools.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, School } from '@prisma/client';

@Injectable()
export class SchoolsService {
  constructor(private prisma: PrismaService) {}

  async createSchool(data: Prisma.SchoolCreateInput): Promise<School> {
    return this.prisma.school.create({ data });
  }

  async getAllSchools(): Promise<School[]> {
    return this.prisma.school.findMany();
  }

  async getSchoolById(id: number): Promise<School | null> {
    return this.prisma.school.findUnique({ where: { id } });
  }

  async updateSchool(
    id: number,
    data: Prisma.SchoolUpdateInput,
  ): Promise<School> {
    return this.prisma.school.update({ where: { id }, data });
  }

  async deleteSchool(id: number): Promise<School> {
    return this.prisma.school.delete({ where: { id } });
  }
}

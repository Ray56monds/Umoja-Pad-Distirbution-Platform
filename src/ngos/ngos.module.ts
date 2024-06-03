import { Module } from '@nestjs/common';
import { NGOsService } from './ngos.service';
import { NGOsController } from './ngos.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [NGOsService, PrismaService],
  controllers: [NGOsController],
})
export class NGOsModule {}

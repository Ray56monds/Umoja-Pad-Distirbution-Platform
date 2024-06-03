import { Module } from '@nestjs/common';
import { DistributionEventsService } from './distribution-events.service';
import { DistributionEventsController } from './distribution-events.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [DistributionEventsService, PrismaService],
  controllers: [DistributionEventsController],
})
export class DistributionEventsModule {}

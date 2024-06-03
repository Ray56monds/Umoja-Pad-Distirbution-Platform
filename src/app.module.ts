import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SchoolsModule } from './schools/schools.module';
import { BeneficiariesModule } from './beneficiaries/beneficiaries.module';
import { InventoryItemsModule } from './inventory-items/inventory-items.module';
import { NgosModule } from './ngos/ngos.module';
import { DistributionEventsModule } from './distribution-events/distribution-events.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    UsersModule,
    SchoolsModule,
    BeneficiariesModule,
    InventoryItemsModule,
    NgosModule,
    DistributionEventsModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

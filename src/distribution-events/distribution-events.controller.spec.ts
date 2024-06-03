import { Test, TestingModule } from '@nestjs/testing';
import { DistributionEventsController } from './distribution-events.controller';

describe('DistributionEventsController', () => {
  let controller: DistributionEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistributionEventsController],
    }).compile();

    controller = module.get<DistributionEventsController>(
      DistributionEventsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { DistributionEventsService } from './distribution-events.service';

describe('DistributionEventsService', () => {
  let service: DistributionEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistributionEventsService],
    }).compile();

    service = module.get<DistributionEventsService>(DistributionEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { EntrepreneursService } from './entrepreneurs.service';

describe('EntrepreneursService', () => {
  let service: EntrepreneursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntrepreneursService],
    }).compile();

    service = module.get<EntrepreneursService>(EntrepreneursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

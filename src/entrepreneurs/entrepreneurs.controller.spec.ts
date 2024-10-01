import { Test, TestingModule } from '@nestjs/testing';
import { EntrepreneursController } from './entrepreneurs.controller';
import { EntrepreneursService } from './entrepreneurs.service';

describe('EntrepreneursController', () => {
  let controller: EntrepreneursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntrepreneursController],
      providers: [EntrepreneursService],
    }).compile();

    controller = module.get<EntrepreneursController>(EntrepreneursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

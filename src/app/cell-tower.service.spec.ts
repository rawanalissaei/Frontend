import { TestBed } from '@angular/core/testing';

import { CellTowerService } from './cell-tower.service';

describe('CellTowerService', () => {
  let service: CellTowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CellTowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

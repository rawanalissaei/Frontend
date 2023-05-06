import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellTowerTableComponent } from './cell-tower-table.component';

describe('CellTowerTableComponent', () => {
  let component: CellTowerTableComponent;
  let fixture: ComponentFixture<CellTowerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellTowerTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellTowerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

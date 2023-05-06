import { Component, OnInit } from '@angular/core';
import { CellTowerService } from '../cell-tower.service';
import { CellTower } from '../Cell-tower';

@Component({
  selector: 'app-cell-tower-table',
  templateUrl: './cell-tower-table.component.html',
  styleUrls: ['./cell-tower-table.component.css']
})
export class CellTowerTableComponent implements OnInit {
  displayedColumns: string[] = ['tower_id', 'operator', 'address', 'height', 'tower_type', 'latitude', 'longitude', 'technology'];
  dataSource: CellTower[];

  constructor(private cellTowerService: CellTowerService) { }

  ngOnInit(): void {
    this.cellTowerService.getAllTowers().subscribe(data => {
      this.dataSource = data;
    });
  }
}

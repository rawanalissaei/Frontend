import { Component, OnInit } from '@angular/core';
import { CellTowerService } from './cell-tower.service';

@Component({
  selector: 'app-cell-tower-table',
  template: `
    <table>
      <thead>
        <tr>
          <th>Tower id</th>
          <th>Operator</th>
          <th>Address</th>
          <th>Height</th>
          <th>Tower type</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Technology</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let cellTower of cellTowers">
          <td>{{ cellTower.tower_id }}</td>
          <td>{{ cellTower.operator }}</td>
          <td>{{ cellTower.address }}</td>
          <td>{{ cellTower.height }}</td>
          <td>{{ cellTower.tower_type }}</td>
          <td>{{ cellTower.latitude }}</td>
          <td>{{ cellTower.longitude }}</td>
          <td>{{ cellTower.technology }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class CellTowerTableComponent implements OnInit {
  cellTowers: any[] = [];

  constructor(private cellTowerService: CellTowerService) {}

  ngOnInit() {
    this.cellTowerService.getAllTowers().subscribe((data) => {
      this.cellTowers = data;
    });
  }
}

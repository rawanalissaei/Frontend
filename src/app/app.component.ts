import { Component } from '@angular/core';
import { CellTowerService } from './cell-tower.service';


@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li *ngFor="let cellTower of cellTowers">{{ cellTower.address }}</li>
  </ul>
`

}


)
export class AppComponent {
  title = 'Angular App';
  cellTowers: any[] = [];

  constructor(private cellTowerService: CellTowerService) {}

  ngOnInit() {
  this.cellTowerService.getAllTowers().subscribe((data: any[]) => {
    this.cellTowers = data;
  });
}

}

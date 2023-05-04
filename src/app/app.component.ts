import { Component } from '@angular/core';
import { CellTowerService } from './cell-tower.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
//   template: `
//   <ul>
//     <li *ngFor="let cellTower of cellTowers">{{ cellTower.address }}</li>
//   </ul>
// `

}
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// 
//}

)
export class AppComponent {
  title = 'Angular App';
  cellTowers: any[] = [];

  constructor(private cellTowerService: CellTowerService) {}

  ngOnInit() {
  this.cellTowerService.getAllCellTowers().subscribe((data: any[]) => {
    this.cellTowers = data;
  });
}

}

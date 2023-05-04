import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CellTowerService {

  constructor(private http: HttpClient) {}
  
  getAllCellTowers() {
    return this.http.get<any[]>('http://localhost:8080/challenge/towers');
  }
  
  

  
}

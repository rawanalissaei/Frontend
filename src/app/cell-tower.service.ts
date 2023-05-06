import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CellTowerService {

  private towersUrl = 'http://localhost:8080/challenge/towers';

  constructor(private http: HttpClient) { }

  getAllTowers(): Observable<any[]> {
    return this.http.get<any[]>(this.towersUrl);
  }
  
  

  
}

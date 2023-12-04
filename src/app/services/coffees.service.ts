import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { ICoffee } from '../interfaces/ICoffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeesService {
  url = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'

  constructor(private http: HttpClient) { }

  getData$ = this.http.get<ICoffee[]>(this.url);

  getFilteredData$ = this.getData$.pipe(
    map(cafes => cafes.filter(cafe => cafe.available))
  )
}

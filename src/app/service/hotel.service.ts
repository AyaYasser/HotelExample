import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IHotelResponse } from '../../../src/app/model/hotels.model';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
private static HOTEL_SEARCH_URL = 'https://api.npoint.io/d8c6ab8ac5307d469528';

  constructor(private http: HttpClient) { }
   getHotelList(): Observable<IHotelResponse[]> {
      return  this.http.get<IHotelResponse[]>(HotelService.HOTEL_SEARCH_URL);
    }
}

import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {HotelService} from '../../service/hotel.service';
import { IHotelResponse } from '../../model/hotels.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SeachComponent implements OnInit {
  hotelAllList:IHotelResponse[];
  hotelFilteredList:IHotelResponse[];
  noTotalHotels:number;
  noFilterdHotels:number;
  checkInDate:Date;
  checkOutDate:Date;

  addCheckInEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.checkInDate=event.target.value;
  }
  addCheckOutEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.checkOutDate=event.target.value;
  }
  constructor(private hotelService:HotelService) {
  }

  ngOnInit(): void {
    this.getAllHotels();
  }
  onSearchHotelSubmit(event):void{
    event.preventDefault();
    this.hotelFilteredList=this.hotelAllList.filter(hotels=>new Date(hotels.available_on)>=this.checkInDate
    &&new Date(hotels.available_on)<=this.checkOutDate);
    this.noFilterdHotels=this.hotelFilteredList.length;
  }
   getAllHotels():void{
    this.hotelService.getHotelList().subscribe(
      value => {
        console.log(value);
        this.hotelAllList=value;
        this.hotelFilteredList=value;
        this.noTotalHotels=value.length;
        this.noFilterdHotels=value.length;
    },
    );
   }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public minDate: Date = new Date ("05/07/2017 2:00 AM");
  public maxDate: Date = new Date ("05/27/2017 11:00 AM");
  public dateValue: Date = new Date ("");

}

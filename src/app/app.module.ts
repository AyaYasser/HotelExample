import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AkbariDatePickerModule } from 'akbari-date-picker';
import { SeachComponent } from './component/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';/// add this line
import {DemoMaterialModule} from 'src/app/component/matetial.module';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SeachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  DateTimePickerModule,
  AkbariDatePickerModule,
  BrowserAnimationsModule,
  DemoMaterialModule
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

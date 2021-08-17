import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { BookingStatusComponent } from './booking-status/booking-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    RoomDetailsComponent,
    BookingStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

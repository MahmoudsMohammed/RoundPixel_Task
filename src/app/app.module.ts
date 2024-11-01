import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FlightResultComponent } from './components/flight-result/flight-result.component';
import { SelectedFlightComponent } from './bonus/selected-flight/selected-flight.component';
import { FilterComponent } from './components/flight-result/filter/filter.component';
import { FlightCardComponent } from './components/flight-result/flight-card/flight-card.component';
import { RouterLink } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlightResultComponent,
    SelectedFlightComponent,
    FilterComponent,
    FlightCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    BrowserAnimationsModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

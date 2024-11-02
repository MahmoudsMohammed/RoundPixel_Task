import { Component, OnInit } from '@angular/core';
import { flightService } from './services/flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'online-travel';
  constructor(private flightService: flightService) {}
  ngOnInit(): void {
    this.flightService.getFlightsData();
  }
}

import { flightService } from './../../services/flight.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.scss'],
})
export class FlightResultComponent implements OnInit {
  constructor(private flightService: flightService) {}
  ngOnInit(): void {
    this.flightService.flights$.subscribe(console.log);
  }
}

import { AirItinerary } from 'src/app/model/flight.model';
import { flightService } from './../../services/flight.service';
import { Component } from '@angular/core';
import { Observable, filter, tap } from 'rxjs';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.scss'],
})
export class FlightResultComponent {
  constructor(private flightService: flightService) {}
  displayFilters: boolean = false;
  flightDetails$: Observable<AirItinerary[]> = this.flightService.flights$;
  FlightAirline$: Observable<string[]> = this.flightService.airLines$;
}

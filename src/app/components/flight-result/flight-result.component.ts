import { AirItinerary, flights } from 'src/app/model/flight.model';
import { flightService } from './../../services/flight.service';
import { Component } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.scss'],
})
export class FlightResultComponent {
  constructor(private flightService: flightService) {}
  displayFilters: boolean = false;
  flightDetails$: Observable<AirItinerary[]> = this.flightService.flights$.pipe(
    filter((data: any) => data?.airItineraries),
    map((data: flights) => data.airItineraries)
  );
  FlightAirline$: Observable<string[]> = this.flightService.flights$.pipe(
    filter((data: any) => data?.airlines),
    map((data: flights) => data.airlines)
  );
}

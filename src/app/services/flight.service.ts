import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { AirItinerary, flights, flightsFilter } from '../model/flight.model';

@Injectable({ providedIn: 'root' })
export class flightService {
  data!: flights;
  flightsData: BehaviorSubject<AirItinerary[]> = new BehaviorSubject<
    AirItinerary[]
  >([]);
  airLinesData: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  flights$ = this.flightsData.asObservable();
  airLines$ = this.airLinesData.asObservable();
  flightsFilters!: flightsFilter;

  getFlightsData() {
    fetch('../../../assets/response.json')
      .then((res) => res.json())
      .then((data: flights) => {
        this.data = data;
        this.flightsData.next(data.airItineraries);
        this.airLinesData.next(data.airlines);
      });
  }

  filterFlights(airport: string, airLines: string[], rangeValues: number[]) {
    let data = this.data.airItineraries,
      filterData: any[] = [];

    if (airport.length > 0) {
      data.forEach((flight) => {
        flight.allJourney.flights[0].flightDTO.forEach((dto) => {
          if (
            dto.arrivalTerminalAirport.airportName
              .toLowerCase()
              .includes(airport.toLowerCase()) ||
            dto.departureTerminalAirport.airportName
              .toLowerCase()
              .includes(airport.toLowerCase())
          ) {
            filterData.push(flight);
          }
        });
      });
      data = filterData;
    }

    if (airLines.length > 0) {
      data = data.filter((flight) => {
        return airLines.includes(
          flight.allJourney.flights[0].flightAirline.airlineName
        );
      });
    }

    if (rangeValues.length > 0) {
      data = data.filter((flight) => {
        return (
          flight.itinTotalFare.amount >= rangeValues[0] &&
          flight.itinTotalFare.amount <= rangeValues[1]
        );
      });
    }
    this.flightsData.next(data);
  }
}

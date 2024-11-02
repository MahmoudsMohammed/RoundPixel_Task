import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { flights } from '../model/flight.model';

@Injectable({ providedIn: 'root' })
export class flightService {
  flightsData: BehaviorSubject<flights | {}> = new BehaviorSubject<
    flights | {}
  >({});
  flights$ = this.flightsData.asObservable();

  getFlightsData() {
    fetch('../../../assets/response.json')
      .then((res) => res.json())
      .then((data) => {
        this.flightsData.next(data);
      });
  }
}

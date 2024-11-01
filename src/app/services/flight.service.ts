import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { flights } from '../model/flight.model';

@Injectable({ providedIn: 'root' })
export class flightService {
  flights$ = new Observable<flights>((observer) => {
    fetch('../../../assets/response.json')
      .then((res) => res.json())
      .then((data) => {
        observer.next(data);
        observer.complete();
      });
  });
}

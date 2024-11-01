import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class flightService {
  flights$ = new Observable((observer) => {
    fetch('../../../assets/response.json')
      .then((res) => res.json())
      .then((data) => {
        observer.next(data);
        observer.complete();
      });
  });
}

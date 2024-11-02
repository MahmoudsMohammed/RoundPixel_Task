import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AirItinerary, flightDetails } from 'src/app/model/flight.model';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
})
export class FlightCardComponent implements OnInit {
  @Input() flightDetails!: AirItinerary;
  details!: flightDetails;

  ngOnInit(): void {
    this.details = {
      logo: '',
      name: '',
      code: '',
      deptDate: '',
      arrivalDate: '',
      deptCity: '',
      landCity: '',
      durationHours: 0,
      durationMinutes: 0,
      stops: '',
      amount: 0,
      currencyCode: '',
      flightNum: '',
    };
    this.details.logo =
      this.flightDetails.allJourney.flights[0].flightAirline.airlineLogo;
    this.details.name =
      this.flightDetails.allJourney.flights[0].flightAirline.airlineName;
    this.details.code =
      this.flightDetails.allJourney.flights[0].flightAirline.airlineCode;
    this.details.deptDate = this.getDate(this.flightDetails.deptDate);
    this.details.arrivalDate = this.getDate(
      this.flightDetails.arrivalDate
    );
    this.details.deptCity =
      this.flightDetails.baggageInformation[0].deptCity;
    this.details.flightNum =
      this.flightDetails.baggageInformation[0].flightNum;
    this.details.landCity =
      this.flightDetails.baggageInformation[0].landCity;
    this.details.durationHours = Math.floor(
      this.flightDetails.totalDuration / 60
    );
    this.details.durationMinutes = this.flightDetails.totalDuration % 60;
    this.details.stops =
      this.flightDetails.allJourney.flights[0].stopsNum === 0
        ? 'Direct'
        : `${this.flightDetails.allJourney.flights[0].stopsNum} Stop`;
    this.details.amount = this.flightDetails.itinTotalFare.amount;
    this.details.currencyCode =
      this.flightDetails.itinTotalFare.currencyCode;
  }

  getDate(date: string) {
    return new Date(date).getHours() + ':' + new Date(date).getMinutes();
  }
}

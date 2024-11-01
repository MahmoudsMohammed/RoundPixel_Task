import { Component, Input, OnInit } from '@angular/core';
import { AirItinerary, flightDetails } from 'src/app/model/flight.model';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
})
export class FlightCardComponent implements OnInit {
  @Input() flightDetails: AirItinerary[] = [];
  details: flightDetails[] = [];

  ngOnInit(): void {
    console.log(this.flightDetails);
    for (let i = 0; i < this.flightDetails.length; i++) {
      this.details[i] = {
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
      this.details[i].logo =
        this.flightDetails[i].allJourney.flights[0].flightAirline.airlineLogo;
      this.details[i].name =
        this.flightDetails[i].allJourney.flights[0].flightAirline.airlineName;
      this.details[i].code =
        this.flightDetails[i].allJourney.flights[0].flightAirline.airlineCode;
      this.details[i].deptDate = this.getDate(this.flightDetails[i].deptDate);
      this.details[i].arrivalDate = this.getDate(
        this.flightDetails[i].arrivalDate
      );
      this.details[i].deptCity =
        this.flightDetails[i].baggageInformation[0].deptCity;
      this.details[i].flightNum =
        this.flightDetails[i].baggageInformation[0].flightNum;
      this.details[i].landCity =
        this.flightDetails[i].baggageInformation[0].landCity;
      this.details[i].durationHours = Math.floor(
        this.flightDetails[i].totalDuration / 60
      );
      this.details[i].durationMinutes =
        this.flightDetails[i].totalDuration % 60;
      this.details[i].stops =
        this.flightDetails[i].allJourney.flights[0].stopsNum === 0
          ? 'Direct'
          : `${this.flightDetails[i].allJourney.flights[0].stopsNum} Stop`;
      this.details[i].amount = this.flightDetails[i].itinTotalFare.amount;
      this.details[i].currencyCode =
        this.flightDetails[i].itinTotalFare.currencyCode;
    }
    console.log(this.details);
  }

  getDate(date: string) {
    return new Date(date).getHours() + ':' + new Date(date).getMinutes();
  }
}

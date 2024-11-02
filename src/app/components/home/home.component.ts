import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('describe', { static: true }) describe!: ElementRef;

  ngOnInit(): void {
    const typed = new Typed(this.describe.nativeElement, {
      strings: [
        'Explore breathtaking destinations.',
        'Book your dream getaway today!',
        'Discover the world with exclusive deals.',
        'Adventure awaits around every corner.',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    });
  }
}

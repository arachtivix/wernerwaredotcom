import { Component } from '@angular/core';
import { WernerwareCarousel } from './carousel/carousel.component';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.css'],
  providers: [
    WernerwareCarousel
  ]
})
export class MainContentComponent  { name = 'Angular'; }
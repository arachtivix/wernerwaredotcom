import { Component } from '@angular/core';
import { WernerwareTabs } from './navbar/tabs.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [
    WernerwareTabs
  ]
})
export class AppComponent  { name = 'Angular'; }

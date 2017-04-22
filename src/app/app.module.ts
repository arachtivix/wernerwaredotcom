import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainContentComponent } from './main-content.component';
import { RouterModule } from '@angular/router';
import { WernerwareCarousel } from './carousel/carousel.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        component: MainContentComponent
      }
    ])
  ],
  declarations: [ 
    AppComponent,
    WernerwareCarousel,
    MainContentComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component'
import { HeroDetailComponent } from './hero-detail.component'
import { HeroService } from './heroes.service'
import { DashBoardComponent } from './dashboard.component'
import { AppRoutingModule } from './app-routing.module'


@NgModule({
  imports:
  [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations:
  [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashBoardComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
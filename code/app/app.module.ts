import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyHeroComponent } from './my-hero.component'
import { HeroDetailComponent } from './app.hero-detail.component'


@NgModule({
  imports:
  [
    BrowserModule,
    FormsModule
  ],
  declarations: [AppComponent, HeroDetailComponent, MyHeroComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
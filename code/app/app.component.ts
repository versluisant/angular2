import { Component } from '@angular/core';

import { MyHeroComponent } from './my-hero.component';

@Component({
    selector : 'my-app',
    template : 
    `
    <h1>{{title}}
    <my-hero></my-hero>
    `
})

export class AppComponent {
    title = "Heroes Title";
}
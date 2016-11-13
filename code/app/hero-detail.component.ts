import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import { Hero } from './hero'
import { HeroService } from './heroes.service'

@Component({
  selector: 'my-hero-detail',
  moduleId: module.id,
  templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private Location: Location) { }

  ngOnInit() : void {
    this.route.params.forEach(params => {
      let id = +params['id'];
      this.heroService.getHero(id).then(hero => this.hero = hero);
    });
  }

  goBack() : void {
    this.Location.back();
  }
}
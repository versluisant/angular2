import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero'
import { HeroDetailComponent } from './hero-detail.component'
import { HeroService } from './heroes.service'


@Component({
  selector: 'heroes',
  moduleId: module.id,
  styleUrls: ['heroes.component.css'],
  templateUrl: 'heroes.component.html',
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  };

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

  goToDetails(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
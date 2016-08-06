import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  template:`
  <h2>My Heroes</h2>
  <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  `,
  directives: [HeroDetailComponent]
})
export /**
 * AppComponent
 */
class HeroesComponent implements OnInit{ 

  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  /**
   * Constructor
   */
  constructor(private heroService: HeroService) { }
  /**
   * 
   */
  getHeroes() {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  /**
   * 
   */
  ngOnInit() {
    this.getHeroes();
  }
  /**
   * Metodo que se ejecuta cuando seleccionamos un <Li> de la lista
   */
  onSelect(hero: Hero) { 
    this.selectedHero = hero; 
  }
}
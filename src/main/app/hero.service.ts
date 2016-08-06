import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './Hero';

@Injectable()
export /**
 * HeroService
 */
class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);;
    }
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        );
    }
}  

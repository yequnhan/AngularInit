import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  constructor(private messageService: MessageService) {} // 服务中注入服务
  getHeroes(): Observable<Hero[]> {
    // : Hero[]表示返回值为Hero类型的数组
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES); // of(HEROES) returns an Observable<Hero[]> that emits a single value
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

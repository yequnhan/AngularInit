import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
// import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  // selectedHero: Hero; // 定义类型

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }
  // onSelect(hero: Hero) {
  //   // 校验类型
  //   this.selectedHero = hero;
  // }
  getHeroes() {
    this.heroService.getHeroes().subscribe(heros => (this.heroes = heros)); // 异步获取heroes数据
  }
}

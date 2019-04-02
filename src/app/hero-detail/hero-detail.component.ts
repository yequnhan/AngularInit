import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { debug } from 'util';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero: Hero; // 从父组件传入hero值
  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.getHero();
  }
  getHero() {
    const id = Number(this.route.snapshot.params.id);
    this.heroService.getHero(id).subscribe(hero => {
      this.hero = hero;
    });
    console.log(this.hero);
  }
  goBack() {
    this.location.back();
  }
}

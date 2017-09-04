import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Hero[] = [];

  constructor(private heroesSrv: HeroesService, private router: Router) { }

  ngOnInit() {
    this.heroes = this.heroesSrv.getHeroes();
    console.log(this.heroes);
  }

  showHero(idx: string) {
    console.log(idx);
    this.router.navigate(['/hero', idx])
  }

}

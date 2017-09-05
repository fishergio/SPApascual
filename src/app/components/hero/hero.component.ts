import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  hero:any = {};

  constructor(private activatedRoute: ActivatedRoute, private HeroSrv: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      //console.log(params['id']);
      this.hero = this.HeroSrv.getHero(params['id']);
    })
  }
}

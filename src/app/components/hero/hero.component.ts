import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  hero:any = {};
  logo: string = '';

  constructor(private activatedRoute: ActivatedRoute, private HeroSrv: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      //console.log(params['id']);
      this.hero = this.HeroSrv.getHero(params['id']);
      if(this.hero.casa === 'DC'){
        this.logo = 'assets/img/dc.png';
      }else{
        this.logo = 'assets/img/marvel.png';
      }      
    }, () => console.log('Error'))
  }
}

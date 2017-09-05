import { Component, OnInit } from '@angular/core';
import { Hero, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html'
})
export class SearchHeroComponent implements OnInit {

  heroes:any[] = [];
  search:string;

  constructor(private heroSrv: HeroesService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) {
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params) => {
      this.search = params['name']
      this.heroes = this.heroSrv.searchHero(params['name']);
      console.log(this.heroes);
    })
  }

  showHero(ind:string){
    this.router.navigate(['hero', ind]);
  }

}

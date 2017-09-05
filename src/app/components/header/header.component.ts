import { selector } from 'rxjs/operator/publish';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class AppHeader {
  constructor(private router: Router) {

  }

  searchHero(search: string ) {
    if(search === '')
      return
    this.router.navigate(['/hero-search', search]);
    console.log(search);
  }
}
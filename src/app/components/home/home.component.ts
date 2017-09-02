import { Component } from '@angular/core';

@Component( {
  selector: 'app-home',
  templateUrl: './home-start.component.html',
  styleUrls: ['./home.component.css']
})

export class AppHome {
  showCars: boolean = false;

  data:any = {
    title: 'Mazda 3',
    category: 'Autos Japonenes',
    description: 'El Mazda 3  es un automóvil de turismo del segmento C fabricado por la marca japonesa de automóviles Mazda.'
  }

  cars:string[] = ['Audi R8', 'Mazda MX5', 'Jetta VW', 'Mustang']
}
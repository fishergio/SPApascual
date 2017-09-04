import { RouterModule, Routes } from '@angular/router';
import { AppHome, AboutComponent, HeroesComponent, HeroComponent } from './components/index.components';

const APP_ROUTES: Routes = [
  { path: 'home', component: AppHome },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'hero/:id', component: HeroComponent },
  { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
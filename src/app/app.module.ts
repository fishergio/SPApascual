import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes 
import { APP_ROUTING } from './app.routes';

// Services 
import { HeroesService } from './services/heroes.service';

//Components
import { AppComponent } from './app.component';
import { AppHeader, AppFooter, 
         AppHome, AboutComponent, 
         HeroesComponent, HeroComponent, SearchHeroComponent } from './components/index.components';


@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppFooter,
    AppHome,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    SearchHeroComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
    
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

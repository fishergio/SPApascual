import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes 
import { APP_ROUTING } from './app.routes';
// Services 

//Components
import { AppComponent } from './app.component';
import { AppHeader, AppFooter, 
         AppHome, AboutComponent, 
         HeroesComponent } from './components/index.components';


@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppFooter,
    AppHome,
    AboutComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

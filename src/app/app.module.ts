import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeader, AppFooter, AppHome } from './components/index.components';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppFooter,
    AppHome
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

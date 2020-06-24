import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { BingResultsComponent } from './components/bing-results/bing-results.component';
import { GoogleResultsComponent } from './components/google-results/google-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BingResultsComponent,
    GoogleResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

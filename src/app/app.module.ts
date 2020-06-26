import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BingResultsComponent } from './components/bing-results/bing-results.component';
import { GoogleResultsComponent } from './components/google-results/google-results.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrandNewComponent } from './components/brand-new/brand-new.component';

@NgModule({
  declarations: [
    AppComponent,
    BingResultsComponent,
    GoogleResultsComponent,
    HomePageComponent,
    BrandNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

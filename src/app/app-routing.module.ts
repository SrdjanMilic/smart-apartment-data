import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleResultsComponent } from './components/google-results/google-results.component';
import { BingResultsComponent } from './components/bing-results/bing-results.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full'},
  { path: 'home-page', component: HomePageComponent },
  { path: 'google-results', component: GoogleResultsComponent},
  { path: 'bing-results', component: BingResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

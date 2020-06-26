import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleResultsComponent } from './components/google-results/google-results.component';
import { BingResultsComponent } from './components/bing-results/bing-results.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrandNewComponent } from './components/brand-new/brand-new.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'google-results', component: GoogleResultsComponent},
  { path: 'bing-results', component: BingResultsComponent},
  { path: 'brand-new', component: BrandNewComponent},
  { path: '', redirectTo: '/home-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: false } // <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

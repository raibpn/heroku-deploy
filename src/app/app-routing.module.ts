import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { KokkenComponent} from './kokken/kokken.component';
import { RegnoringComponent} from './regnoring/regnoring.component';

const routes: Routes = [
  { path: 'landingpage', component: LandingPageComponent },
  { path: '', component: LandingPageComponent },

  { path: 'kokken', component: KokkenComponent },
  { path: 'regnoring', component: RegnoringComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

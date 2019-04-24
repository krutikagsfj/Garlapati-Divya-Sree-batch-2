import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CarbrandsComponent } from './carbrands/carbrands.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:"",component:HomeComponent},
  { path:"about",component:AboutComponent},
  { path:"carbrands",component:CarbrandsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

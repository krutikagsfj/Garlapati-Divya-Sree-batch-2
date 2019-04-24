import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CarbrandsComponent } from './carbrands/carbrands.component';
import { HttpClientModule } from '@angular/common/http';
import { MyservService } from './myserv.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CarbrandsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MyservService],
  bootstrap: [AppComponent]
})
export class AppModule { }

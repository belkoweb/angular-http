import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { VansComponent } from './vans/vans.component';
import { VehiculeCreateComponent } from './vehicule-create/vehicule-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    VansComponent,
    VehiculeCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

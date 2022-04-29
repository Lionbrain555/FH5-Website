import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MaterialExampleModule} from '../material.module';
import { CarsComponent } from './cars/cars.component';
import { FunnycarsComponent } from './funnycars/funnycars.component';
import { MapComponent } from './map/map.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { carFilterPipe } from './cars/car-filter.pipe';

const allRoutes: Routes =[
      {path: 'cars', component: CarsComponent},
      {path: 'funnycars', component: FunnycarsComponent},
      {path: 'map', component: MapComponent},
      {path: 'festivals', component: FestivalsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    CarsComponent,
    FunnycarsComponent,
    MapComponent,
    FestivalsComponent,
    carFilterPipe
  ],
  imports: [
    RouterModule.forRoot(allRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

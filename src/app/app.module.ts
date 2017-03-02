import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';
import { CollapseModule } from 'ng2-bootstrap/'

import {MapService} from './map.service';
import {EarthquakeService} from './earthquake.service';
import { AppComponent } from './app.component';
import {JsonpModule} from '@angular/http';
import { ControlComponent } from './control/control.component';
import {MarkercontrolService} from "./markercontrol.service";
import {ChartdataService} from "./chartdata.service";
import { ChartComponent } from './chart/chart.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    ChartComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent
  ],
  imports: [routing,
    CollapseModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    MapService,
    EarthquakeService,
    MarkercontrolService,
    ChartdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

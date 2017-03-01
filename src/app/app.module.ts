import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MapService} from './map.service';
import {EarthquakeService} from './earthquake.service';
import { AppComponent } from './app.component';
import {JsonpModule} from '@angular/http';
import { ControlComponent } from './control/control.component';
import {IconcontrolService} from "./iconcontrol.service";
import {ChartdataService} from "./chartdata.service";
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    MapService,
    EarthquakeService,
    IconcontrolService,
    ChartdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

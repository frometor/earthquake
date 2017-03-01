import {Component, OnInit} from '@angular/core';
import {MapService} from "./map.service";
import {FeatureGroup} from 'leaflet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private chartData: Array<any>;

  public markers: FeatureGroup;

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    this.mapService.initialize();
  }

  handleChartDataCreated(newChartData) {
    this.chartData = newChartData;
  }

}

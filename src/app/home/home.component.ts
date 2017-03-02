import {Component, OnInit} from '@angular/core';
import {MapService} from "../map.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private chartData: Array<any>;

  constructor(private mapService: MapService) {
  }

  ngOnInit() {

    // creates the map on Init of home.component
    this.mapService.initialize();
  }

  // handles the Event emitted by control.component
  // forces update of chart.component
  handleChartDataCreated(newChartData) {
    this.chartData = newChartData;
  }

}

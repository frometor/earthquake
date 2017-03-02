import {Component, OnInit} from '@angular/core';
import {MapService} from "./map.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private chartData: Array<any>;

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
   // this.mapService.initialize();
  }
/*
  // handles the Event emitted by control.component
  handleChartDataCreated(newChartData) {
    this.chartData = newChartData;
  }*/

}

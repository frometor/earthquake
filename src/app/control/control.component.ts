import {Component, Output, EventEmitter} from '@angular/core';
import {EarthquakeService} from "../earthquake.service";
import {MarkercontrolService} from "../markercontrol.service";
import {ChartdataService} from "../chartdata.service";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  @Output() chartDataCreated = new EventEmitter();
  _data: any;
  createdData: any;

  constructor(private markercontrolService: MarkercontrolService, private earthquakeService: EarthquakeService, private chartdataService: ChartdataService) {
  }

  earthquakeTiming = [
    {"duration": "hour"},
    {"duration": "day"},
    {"duration": "week"},

    // TODO: working but load too heavy atm
    // suggest: markercluster, only magnitude >2.5 or show only earthquakes inside bounding box
    /* {"duration": "month"}*/
  ];

  earthquakeMagnitude = [

    // already preselected in control.component
    /*{"mag": "all"},*/
    {"mag": "significant"},
    {"mag": "4.5"},
    {"mag": "2.5"},
    {"mag": "1.0"},
  ];

  // user uses Select controls in control.component
  onChanged(magnitude, duration) {

    // check if one of the values is null
    if (magnitude === "null" || duration === "null") {
      return;
    }
    // delete Icons
    this.markercontrolService.deleteMarker();

    // turn Observable hot, returned data creates new Icons and Data for BarChart
    // emits event to update chart.component
    this.earthquakeService.getEarthquakes(magnitude, duration).subscribe(
      (data: any) => {
        this._data = data;
        this.markercontrolService.createMarker(this._data);
        this.createdData = this.chartdataService.createData(this._data);

        // emit event with new data, force bar chart to redraw
        this.chartDataCreated.emit(this.createdData);
      });
  }
}

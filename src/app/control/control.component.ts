import {Component, Output, EventEmitter} from '@angular/core';
import {MapService} from "../map.service";
import {EarthquakeService} from "../earthquake.service";
import {IconcontrolService} from "../iconcontrol.service";
import {ChartdataService} from "../chartdata.service";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  @Output() chartDataCreated = new EventEmitter();
  _data: any;
  createdData;

  constructor(private mapService: MapService, private iconcontrolService: IconcontrolService, private earthquakeService: EarthquakeService, private chartdataService: ChartdataService) {
  }

  earthquakeMagnitude = [
    /*{"mag": "all"},*/
    {"mag": "significant"},
    {"mag": "4.5"},
    {"mag": "2.5"},
    {"mag": "1.0"},
  ];

  earthquakeTiming = [
    {"duration": "hour"},
    {"duration": "day"},
    {"duration": "week"},
    /* {"duration": "month"}*/
  ];

  onChanged(magnitude, duration) {

    this.iconcontrolService.deleteIcons();
    this.earthquakeService.getEarthquakes(magnitude, duration).subscribe(
      (data: any) => {
        this._data = data;
        this.iconcontrolService.createIcons(this._data);
        this.createdData = this.chartdataService.createData(this._data);
        this.chartDataCreated.emit(this.createdData);
      });

  }

}

import {Component} from '@angular/core';
import {MapService} from "../map.service";
import {EarthquakeService} from "../earthquake.service";
import {IconcontrolService} from "../iconcontrol.service";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  _data: any;

  constructor(private mapService: MapService, private iconcontrolService: IconcontrolService, private earthquakeService: EarthquakeService) {
  }

  earthquakeMagnitude = [
    {"mag": "all"},
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

  onClickedless() {
    this.iconcontrolService.deleteIcons();

    /* console.log("clicked");
     this.earthquakeService.getEarthquakes("all_day").subscribe(
     (data: any) => {
     console.log(data);
     this._data = data;
     //this.createIcons(this._data);
     })*/
  }

  onClickedmore() {

    // map has markers layer
    if (this.mapService.map.hasLayer(this.mapService.markers)) {
      return;
    }
    /*
     this.earthquakeService.getEarthquakes("all_day").subscribe(
     (data: any) => {
     console.log(data);
     this._data = data;
     this.iconcontrolService.createIcons(this._data);
     });*/
  }

  onChanged(magnitude, duration) {

    this.iconcontrolService.deleteIcons();
    this.earthquakeService.getEarthquakes(magnitude, duration).subscribe(
      (data: any) => {
        this._data = data;
        this.iconcontrolService.createIcons(this._data);
      });
  }

}

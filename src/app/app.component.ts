import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MapService} from "./map.service";
import {EarthquakeService} from "./earthquake.service";
import {IconcontrolService} from "./iconcontrol.service";
import {earthquake} from "./models/earthquake"
import { Map, map,FeatureGroup, featureGroup,LayerGroup } from 'leaflet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app works!';
  _data: any[];
  aearthquakes = [];

  public markers : FeatureGroup;


  constructor(private mapService: MapService, private earthquakeService: EarthquakeService, private iconcontrolService:IconcontrolService) {
    this._data;
  }
/*
  createIcons(ddata) {
    console.log(ddata);

    this.markers=featureGroup();

    for (var i in ddata.features) {
      console.log(ddata.features[i]);
      var marker = L.marker([ddata.features[i].geometry.coordinates[1], ddata.features[i].geometry.coordinates[0]]).addTo(this.mapService.map);
      marker.bindPopup("Place: "+ddata.features[i].properties["place"]+"<br>Magnitude: "+ddata.features[i].properties["mag"]);
      this.markers.addLayer(marker);
    }
console.log(this.markers);
  }
*/
  ngOnInit() {

    this.mapService.initialize();

   /* this.earthquakeService.getEarthquakes("all_day").subscribe(
      (data: any) => {
        console.log(data);
        this._data = data;
        this.iconcontrolService.createIcons(this._data);
      }
*/
      /* //  function (response) { console.log("Success Response" + response["_body"]) },
       function (response) {this._data=response["_body"]; console.log(JSON.parse(this._data)); this.createIcons(this._data) },
       function (error) { console.log("Error happened" + error) },
       function () { console.log("the subscription is completed") }*/

      /*//function(response){data => { this._data = data; console.log(JSON.parse(this._data["_body"])); }
       function (response) { response => { this._data = response; console.log(JSON.parse(this._data["_body"])); } },
       function (error) { console.log("Error happened, " + error) },
       function () { console.log("the subscription is completed") }*/

      //  data => { this._data = data; console.log(JSON.parse(this._data["_body"])); }
/*
    );
  */}
}

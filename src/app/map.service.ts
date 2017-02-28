import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {Map, map, FeatureGroup, featureGroup} from 'leaflet';

@Injectable()
export class MapService {
  public map: Map;
  public markers: FeatureGroup;

  constructor(private http: Http) {
  }

  initialize() {

    if (this.map) {
      return;
    }
    this.markers = featureGroup();
    this.map = map('map').setView([52.45, 13.29], 4);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }
}

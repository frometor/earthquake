import {Injectable} from '@angular/core';
import {Map, map, FeatureGroup, featureGroup} from 'leaflet';
import TileLayer = L.TileLayer;

@Injectable()
export class MapService {
  public map: Map;
  public markers: FeatureGroup;
  World_Imagery: TileLayer;
  Stamen_TonerLite: TileLayer;

  constructor() {
  }

  initialize() {
    /*
     if (this.map) {
     return;
     }*/
    this.markers = featureGroup();

    this.Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ' +
      '<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      minZoom: 2,
      maxZoom: 18,
      ext: 'png'
    });

    this.World_Imagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    this.map = L.map('map', {
      center: [52.45, 13.29],
      zoom: 4,
      layers: [this.World_Imagery, this.Stamen_TonerLite]
    });

    var baseMaps = {
      "World": this.World_Imagery,
      "TonerLite": this.Stamen_TonerLite
    };

    L.control.layers(baseMaps).addTo(this.map);

    this.map.options.maxZoom = 18;
    this.map.options.minZoom = 2;
  }
}

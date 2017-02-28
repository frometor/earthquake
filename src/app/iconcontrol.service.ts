import {Injectable} from '@angular/core';
import {MapService} from "./map.service";

@Injectable()
export class IconcontrolService {

  constructor(private mapService: MapService) {
  }

  createIcons(ddata) {

    for (var i in ddata.features) {
      var marker = L.marker([ddata.features[i].geometry.coordinates[1], ddata.features[i].geometry.coordinates[0]]).addTo(this.mapService.map);
      marker.bindPopup("Place: " + ddata.features[i].properties["place"] + "<br>Magnitude: " + ddata.features[i].properties["mag"]);

      // adds marker to markersLayer
      this.mapService.markers.addLayer(marker);
    }

    //adds markersLayer to map
    this.mapService.map.addLayer(this.mapService.markers);
  }

  deleteIcons() {
    this.mapService.markers.clearLayers();
    this.mapService.map.removeLayer(this.mapService.markers);
  }

}


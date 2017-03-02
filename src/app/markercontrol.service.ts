import {Injectable} from '@angular/core';
import {MapService} from "./map.service";
import {Marker, Icon} from 'leaflet';

@Injectable()
export class MarkercontrolService {

  constructor(private mapService: MapService) {
  }

  createMarker(mc_data) {

    /*
     * TODO: get actual icon colors from d3 barchart
     * */

    var markerColors = ["#33cccc", "#669999", "#996666", "#cc3333"];
    var marker: Marker;
    var SVGIcon: Icon;

    for (var i in mc_data.features) {
      if (mc_data.features[i].properties["mag"] < 1) {
        SVGIcon = this.createCustomSvgMarker(markerColors[0]);
        marker = L.marker([mc_data.features[i].geometry.coordinates[1], mc_data.features[i].geometry.coordinates[0]], {icon: SVGIcon}).addTo(this.mapService.map);
      } else if (mc_data.features[i].properties["mag"] < 2.5) {
        SVGIcon = this.createCustomSvgMarker(markerColors[1]);
        marker = L.marker([mc_data.features[i].geometry.coordinates[1], mc_data.features[i].geometry.coordinates[0]], {icon: SVGIcon}).addTo(this.mapService.map);
      } else if (mc_data.features[i].properties["mag"] < 4.5) {
        SVGIcon = this.createCustomSvgMarker(markerColors[2]);
        marker = L.marker([mc_data.features[i].geometry.coordinates[1], mc_data.features[i].geometry.coordinates[0]], {icon: SVGIcon}).addTo(this.mapService.map);
      } else {
        SVGIcon = this.createCustomSvgMarker(markerColors[3]);
        marker = L.marker([mc_data.features[i].geometry.coordinates[1], mc_data.features[i].geometry.coordinates[0]], {icon: SVGIcon}).addTo(this.mapService.map);
      }

      //binds a popup to marker
      marker.bindPopup("Place: " + mc_data.features[i].properties["place"] + "<br>Magnitude: " + mc_data.features[i].properties["mag"]);

      // adds marker to markersLayer
      this.mapService.markers.addLayer(marker);
    }

    //adds markersLayer to map
    this.mapService.map.addLayer(this.mapService.markers);
  }

  private createCustomSvgMarker(color) {

    // credits: https://groups.google.com/forum/#!topic/leaflet-js/GSisdUm5rEc
    // here's the SVG for the marker
    //<!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->

    let svgIcon = '<svg width="390" height="370" xmlns="http://www.w3.org/2000/svg"> <g>  <title>background</title>  <rect fill="none" id="canvas_background" height="372" width="392" y="-1" x="-1"/>' +
      '  <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid"> <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/> </g> ' +
      '</g><g><title>Layer 1</title> <path stroke="#000" id="svg_4" d="m11,186.26774l0,0c0,-98.1588 82.73829,-177.73224 184.80112,-177.73224l0,0c49.01228,0 96.01719,18.7253 130.6741,52.05656c34.65694,33.33127 54.12702,78.53815 54.12702,125.67569l0,0c0,98.15879 -82.73829,177.73224 -184.80112,177.73224l0,0c-102.06282,0 -184.80112,-79.57346 -184.80112,-177.73224zm92.40056,0l0,0c0,49.07939 41.36917,88.86612 92.40056,88.86612c51.03143,0 92.40056,-39.78673 92.40056,-88.86612c0,-49.07939 -41.36916,-88.86612 -92.40056,-88.86612l0,0c-51.03139,0 -92.40056,39.78675 -92.40056,88.86612z" ' +
      'fill-opacity="null" stroke-opacity="null" stroke-width="12.5" fill="' + color + '"/></g></svg>';


    // here's the trick, base64 encode the URL
    // might throw error in IDE or Linter but btoa() is working
    let svgURL = "data:image/svg+xml;base64," + btoa(svgIcon);

    // create icon
    let SVGIcon = L.icon({
      iconUrl: svgURL,
      iconSize: [20, 20],
      shadowSize: [12, 10],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10]
    });

    return SVGIcon;
  }

  deleteMarker() {
    this.mapService.markers.clearLayers();
    this.mapService.map.removeLayer(this.mapService.markers);
  }

}


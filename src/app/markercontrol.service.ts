import {Injectable} from '@angular/core';
import {MapService} from "./map.service";

@Injectable()
export class IconcontrolService {

  constructor(private mapService: MapService) {
  }

  createIcons(ddata) {


    /*
    * TODO: wrap custom svg icon creation in seperate function and return SvgIcon
    * TODO: simplify
    * */
    // credits: https://groups.google.com/forum/#!topic/leaflet-js/GSisdUm5rEc
    // here's the SVG for the marker
    //<!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->

    //#33cccc
    const blueIcon = '<svg width="390" height="370" xmlns="http://www.w3.org/2000/svg"> <g>  <title>background</title>  <rect fill="none" id="canvas_background" height="372" width="392" y="-1" x="-1"/>' +
      '  <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid"> <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/> </g> ' +
      '</g><g><title>Layer 1</title> <path stroke="#000" id="svg_4" d="m11,186.26774l0,0c0,-98.1588 82.73829,-177.73224 184.80112,-177.73224l0,0c49.01228,0 96.01719,18.7253 130.6741,52.05656c34.65694,33.33127 54.12702,78.53815 54.12702,125.67569l0,0c0,98.15879 -82.73829,177.73224 -184.80112,177.73224l0,0c-102.06282,0 -184.80112,-79.57346 -184.80112,-177.73224zm92.40056,0l0,0c0,49.07939 41.36917,88.86612 92.40056,88.86612c51.03143,0 92.40056,-39.78673 92.40056,-88.86612c0,-49.07939 -41.36916,-88.86612 -92.40056,-88.86612l0,0c-51.03139,0 -92.40056,39.78675 -92.40056,88.86612z" ' +
      'fill-opacity="null" stroke-opacity="null" stroke-width="12.5" fill="#33cccc"/></g></svg>';

    //#669999
    const turquoiseIcon = '<svg width="390" height="370" xmlns="http://www.w3.org/2000/svg"> <g>  <title>background</title>  <rect fill="none" id="canvas_background" height="372" width="392" y="-1" x="-1"/>' +
      '  <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid"> <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/> </g> ' +
      '</g><g><title>Layer 1</title> <path stroke="#000" id="svg_4" d="m11,186.26774l0,0c0,-98.1588 82.73829,-177.73224 184.80112,-177.73224l0,0c49.01228,0 96.01719,18.7253 130.6741,52.05656c34.65694,33.33127 54.12702,78.53815 54.12702,125.67569l0,0c0,98.15879 -82.73829,177.73224 -184.80112,177.73224l0,0c-102.06282,0 -184.80112,-79.57346 -184.80112,-177.73224zm92.40056,0l0,0c0,49.07939 41.36917,88.86612 92.40056,88.86612c51.03143,0 92.40056,-39.78673 92.40056,-88.86612c0,-49.07939 -41.36916,-88.86612 -92.40056,-88.86612l0,0c-51.03139,0 -92.40056,39.78675 -92.40056,88.86612z" ' +
      'fill-opacity="null" stroke-opacity="null" stroke-width="12.5" fill="#669999"/></g></svg>';

    //#996666
    const greyIcon = '<svg width="390" height="370" xmlns="http://www.w3.org/2000/svg"> <g>  <title>background</title>  <rect fill="none" id="canvas_background" height="372" width="392" y="-1" x="-1"/>' +
      '  <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid"> <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/> </g> ' +
      '</g><g><title>Layer 1</title> <path stroke="#000" id="svg_4" d="m11,186.26774l0,0c0,-98.1588 82.73829,-177.73224 184.80112,-177.73224l0,0c49.01228,0 96.01719,18.7253 130.6741,52.05656c34.65694,33.33127 54.12702,78.53815 54.12702,125.67569l0,0c0,98.15879 -82.73829,177.73224 -184.80112,177.73224l0,0c-102.06282,0 -184.80112,-79.57346 -184.80112,-177.73224zm92.40056,0l0,0c0,49.07939 41.36917,88.86612 92.40056,88.86612c51.03143,0 92.40056,-39.78673 92.40056,-88.86612c0,-49.07939 -41.36916,-88.86612 -92.40056,-88.86612l0,0c-51.03139,0 -92.40056,39.78675 -92.40056,88.86612z" ' +
      'fill-opacity="null" stroke-opacity="null" stroke-width="12.5" fill="#996666"/></g></svg>';

    //#cc3333
    const redIcon = '<svg width="390" height="370" xmlns="http://www.w3.org/2000/svg"> <g>  <title>background</title>  <rect fill="none" id="canvas_background" height="372" width="392" y="-1" x="-1"/>' +
      '  <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid"> <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/> </g> ' +
      '</g><g><title>Layer 1</title> <path stroke="#000" id="svg_4" d="m11,186.26774l0,0c0,-98.1588 82.73829,-177.73224 184.80112,-177.73224l0,0c49.01228,0 96.01719,18.7253 130.6741,52.05656c34.65694,33.33127 54.12702,78.53815 54.12702,125.67569l0,0c0,98.15879 -82.73829,177.73224 -184.80112,177.73224l0,0c-102.06282,0 -184.80112,-79.57346 -184.80112,-177.73224zm92.40056,0l0,0c0,49.07939 41.36917,88.86612 92.40056,88.86612c51.03143,0 92.40056,-39.78673 92.40056,-88.86612c0,-49.07939 -41.36916,-88.86612 -92.40056,-88.86612l0,0c-51.03139,0 -92.40056,39.78675 -92.40056,88.86612z" ' +
      'fill-opacity="null" stroke-opacity="null" stroke-width="12.5" fill="#cc3333"/></g></svg>';


    // here's the trick, base64 encode the URL
    // might throw error in IDE or Linter but btoa() is working
    const svgURLBlue = "data:image/svg+xml;base64," + btoa(blueIcon);
    console.log("svgURLBlue", svgURLBlue);
    const svgURLTurquoise = "data:image/svg+xml;base64," + btoa(turquoiseIcon);
    const svgURLGrey = "data:image/svg+xml;base64," + btoa(greyIcon);
    const svgURLRed = "data:image/svg+xml;base64," + btoa(redIcon);


    // create icon
    const SVGIconBlue = L.icon({
      iconUrl: svgURLBlue,
      iconSize: [20, 20],
      shadowSize: [12, 10],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10]
    });

    const SVGIconTurquoise = L.icon({
      iconUrl: svgURLTurquoise,
      iconSize: [20, 20],
      shadowSize: [12, 10],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10]
    });
    const SVGIconGrey = L.icon({
      iconUrl: svgURLGrey,
      iconSize: [20, 20],
      shadowSize: [12, 10],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10]
    });

    const SVGIconRed = L.icon({
      iconUrl: svgURLRed,
      iconSize: [20, 20],
      shadowSize: [12, 10],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10]
    });
    //


    for (var i in ddata.features) {
      if (ddata.features[i].properties["mag"] < 1) {
        var marker = L.marker([ddata.features[i].geometry.coordinates[1], ddata.features[i].geometry.coordinates[0]], {icon: SVGIconBlue}).addTo(this.mapService.map);
      } else if (ddata.features[i].properties["mag"] < 2.5) {
        var marker = L.marker([ddata.features[i].geometry.coordinates[1], ddata.features[i].geometry.coordinates[0]], {icon: SVGIconTurquoise}).addTo(this.mapService.map);
      } else if (ddata.features[i].properties["mag"] < 4.5) {
        var marker = L.marker([ddata.features[i].geometry.coordinates[1], ddata.features[i].geometry.coordinates[0]], {icon: SVGIconGrey}).addTo(this.mapService.map);

      } else {
        var marker = L.marker([ddata.features[i].geometry.coordinates[1], ddata.features[i].geometry.coordinates[0]], {icon: SVGIconRed}).addTo(this.mapService.map);
      }

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


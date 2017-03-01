import {Injectable} from '@angular/core';
import {Http, Headers, Response, URLSearchParams, Request, RequestOptions, RequestMethod} from '@angular/http';
import {Jsonp} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class EarthquakeService {

  // Resolve HTTP using the constructor
  constructor(private _http: Http, private _jsonp: Jsonp) {
  }

  private earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/";
  headers = new Headers();

  getEarthquakes(magnitude: string, duration: string):Observable<any[]> {

    return this._http.get(this.earthquakeUrl + magnitude + "_" + duration + ".geojson")
      .map(function (res: Response){
        return res.json() || {};
      })
      .catch(this.handleError)
      .finally(() => {
      });
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    console.log("err", error);
    if (error instanceof Response) {
      const body = error || '';
      const err = body || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

import {Injectable} from '@angular/core';

@Injectable()
export class ChartdataService {
  chartDataService: any[] = [];
  private lessThan1 = [];
  private lessThan2_5 = [];
  private lessThan4_5 = [];
  private lessThanElse = [];

  constructor() {
  }

  createData(data) {

    this.lessThan1 = [];
    this.lessThan2_5 = [];
    this.lessThan4_5 = [];
    this.lessThanElse = [];
    this.chartDataService = [];

    for (var i in data.features) {
      if (data.features[i].properties["mag"] < 1) {
        this.lessThan1.push(data.features[i].properties["mag"]);
      }
      else if (data.features[i].properties["mag"] < 2.5) {
        this.lessThan2_5.push(data.features[i].properties["mag"]);
      }
      else if (data.features[i].properties["mag"] < 4.5) {
        this.lessThan4_5.push(data.features[i].properties["mag"]);
      }
      else {
        this.lessThanElse.push(data.features[i].properties["mag"]);
      }
    }
    this.chartDataService.push([`< 1`,
      this.lessThan1.length]);
    this.chartDataService.push([`> 1 and < 2.5`,
      this.lessThan2_5.length]);
    this.chartDataService.push([`> 2.5 and < 4.5`,
      this.lessThan4_5.length]);
    this.chartDataService.push([`> 4.5`,
      this.lessThanElse.length]);

    return this.chartDataService;
  }
}

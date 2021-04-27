import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  areas = [{
    country: "Russia",
    area: 12
  }, {
    country: "Canada",
    area: 7
  }, {
    country: "USA",
    area: 7
  }, {
    country: "China",
    area: 7
  }, {
    country: "Brazil",
    area: 6
  }, {
    country: "Australia",
    area: 5
  }, {
    country: "India",
    area: 2
  }, {
    country: "Others",
    area: 55
  }];


  oilCosts = [{
    month: 1,
    2010: 77,
    2011: 93,
    2012: 107
}, {
    month: 2,
    2010: 72,
    2011: 101,
    2012: 112
}, {
    month: 3,
    2010: 79,
    2011: 115,
    2012: 123
}, {
    month: 4,
    2010: 82,
    2011: 116,
    2012: 123
}, {
    month: 5,
    2010: 86,
    2011: 124,
    2012: 116
}, {
    month: 6,
    2010: 73,
    2011: 115,
    2012: 102
}, {
    month: 7,
    2010: 73,
    2011: 110,
    2012: 94
}, {
    month: 8,
    2010: 77,
    2011: 117,
    2012: 105
}, {
    month: 9,
    2010: 76,
    2011: 113,
    2012: 113
}, {
    month: 10,
    2010: 81,
    2011: 103,
    2012: 111
}, {
    month: 11,
    2010: 83,
    2011: 110,
    2012: 107
}, {
    month: 12,
    2010: 89,
    2011: 109,
    2012: 110
}];

  constructor() { }

  pointClickHandler(e: any) {
    this.toggleVisibility(e.target);
  }

  legendClickHandler(e: any) {
    let arg = e.target,
      item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    this.toggleVisibility(item);
  }

  toggleVisibility(item: any) {
    if (item.isVisible()) {
      item.hide();
    } else {
      item.show();
    }
  }

  ngOnInit(): void {
  }

}

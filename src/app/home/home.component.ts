import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../data-service.service";
import { Observable } from "rxjs";
//import * as CanvasJS from './canvasjs.min';
import { GoogleChartsModule } from "angular-google-charts";

let google: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  txt1: string = "akshi";
  txt2 = "";
  selectindex: any;

  valueChanged(val) {
    this.selectindex = val;
  }
  // data:any;

  title = "Browser market shares at a specific website, 2014";
  type = "PieChart";
  data = [
    ["Firefox", 45.0],
    ["IE", 26.8],
    ["Chrome", 12.8],
    ["Safari", 8.5],
    ["Opera", 6.2],
    ["Others", 0.7]
  ];
  columnNames = ["Browser", "Percentage"];
  options = {};
  width = 550;
  height = 400;

  constructor(private _exampleService: DataServiceService) {}

  ngOnInit() {
    this.txt2 = this._exampleService.uname;
    console.log("username = " + this._exampleService.uname);
  }

  chartone() {
    document.getElementById("chart1").style.display = "block";
  }

  charttwo() {
    document.getElementById("chart2").style.display = "block";
  }

  // google.charts.load('current', {
  //   packages: ['bar']
  // }).then(
  // function () {
  //         google.load("visualization", "1", {packages:["corechart"]});
  // google.setOnLoadCallback(this.drawchart);

  //      dataDefault = google.visualization.arrayToDataTable([
  //         ['Year', 'Sales', 'Expenses', 'Profit'],
  //         ['2014', 1000, 400, 200],
  //         ['2015', 1170, 460, 250],
  //         ['2016', 660, 1120, 300],
  //         ['2017', 1030, 540, 350]
  //     ]);

  //      dataLibraryBooks = google.visualization.arrayToDataTable([
  //         ['Digit', 'Benford', 'Librarybooks'],
  //         ['1', 1000, 200],
  //         ['2', 1170, 760],
  //         ['3', 660, 100],
  //         ['4', 1030, 300],
  //         ['5', 1030, 140],
  //         ['6', 1030, 640],
  //         ['7', 1030, 240],
  //         ['8', 1030, 440],
  //         ['9', 1030, 840]
  //     ]);;
  //      dataSunspots = google.visualization.arrayToDataTable([
  //       ['x', 'y'],
  //       ['A', 10],
  //       ['B', 30],
  //       ['C', 50],
  //       ['D', 70],
  //       ['E', 90]
  //   ]);

  //    options = {
  //       chart: {
  //           title: 'Bar Chart'
  //       }
  //   };

  //    chart = new google.charts.Bar(document.getElementById('chart_div'));

  //    menu = document.getElementById('menu');
  //   //menu.addEventListener('change', drawChart, false);
  //    drawChart();
  //    drawChart() {
  //     switch (this.selectindex) {
  //       case 1:
  //         console.log('librarybooks');
  //         this.chart.draw(this.dataLibraryBooks, google.charts.Bar.convertOptions(this.options));
  //         break;

  //       case 2:
  //         console.log('Sunspots');
  //        this. chart.draw(this.dataSunspots, google.charts.Bar.convertOptions(this.options));
  //         break;

  //       default: console.log('default');
  //       this.chart.draw(this.dataDefault, google.charts.Bar.convertOptions(this.options));
  //   }
  // }
}

// }google.charts.load('current', {packages: ['corechart']});
// google.charts.setOnLoadCallback(this.drawChart());

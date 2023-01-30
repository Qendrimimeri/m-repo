import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid
} from 'ng-apexcharts';

export type salesChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  grid: ApexGrid;
};

@Component({
  selector: 'app-sales-ratio',
  templateUrl: './sales-ratio.component.html'
})
export class SalesRatioComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public salesChartOptions: Partial<salesChartOptions>;
  constructor() {
    this.salesChartOptions = {
      chart: {
          type: 'area',
          height: 350
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          show: true,
          width: 2,
          curve: 'smooth'

      },
      series: [{
          name: 'Dhune',
          data: [14, 15, 11, 17, 12, 13, 11, 13, 15, 11, 17, 15]
      },
      {
        name: 'Komunikacion',
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65],
    },

    {
      name: 'Keqperodorim',
      data: [23, 45, 21, 37, 12, 23, 41, 53, 25, 41, 17, 45]
  }],
      xaxis: {
          categories: ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qeshor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nentor', 'Dhjetor']
      },
  };
  }

  ngOnInit(): void {
  }

}

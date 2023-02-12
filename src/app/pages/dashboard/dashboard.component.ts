import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    const myChart = new Chart("barchart", {
      type: 'bar',
      data: {
        labels: ['2022', '2021', '2020', '2019', '2018', '2017'],
        datasets: [{
          label: 'Total SMS',
          data: [1200, 1850, 520, 1485, 1372, 1263],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const myCharts = new Chart("piechart", {
      type: 'pie',
      data: {
        labels: ['2022', '2021', '2020', '2019', '2018', '2017'],
        datasets: [{
          label: 'Total SMS',
          data: [1200, 1850, 520, 1485, 1372, 1263],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }



}

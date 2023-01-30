import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incoming-reports',
  templateUrl: './incoming-reports.component.html',
  styleUrls: ['./incoming-reports.component.scss']
})
export class IncomingReportsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  reports: any

  getReports(){
    this.httpClient.get('https://localhost:7265/api/reports').subscribe((data: any) => {
      console.log(data);
      this.reports = data;
    },
    (error) => {
      console.log(error);
    })
  }
}

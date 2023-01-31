import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee, Product, TableRows, TopSelling } from '../table/table-data';

@Component({
  selector: 'app-reviewed-reports',
  templateUrl: './reviewed-reports.component.html',
  styleUrls: ['./reviewed-reports.component.scss']
})
export class ReviewedReportsComponent implements OnInit{
  reports: any;

  constructor( private httpClient: HttpClient) {

  }
  ngOnInit(): void {

        this.httpClient.get('https://localhost:7265/api/reports').subscribe((data: any) => {
      console.log(data);
      this.reports = data;
    },
    (error) => {
      console.log(error);
    })
  }
}

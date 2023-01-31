import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, EventEmitter, Output, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;

  constructor(private modalService: NgbModal, private http: HttpClient) {
  }
  name: string;
  ngOnInit(): void {
    this.http.get('https://localhost:7265/api/account/loggedinuser').subscribe((data: any) => {
      console.log(data);
      this.name = data;
    })
  }

}

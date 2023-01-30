import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingReportsComponent } from './incoming-reports.component';

describe('IncomingReportsComponent', () => {
  let component: IncomingReportsComponent;
  let fixture: ComponentFixture<IncomingReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomingReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

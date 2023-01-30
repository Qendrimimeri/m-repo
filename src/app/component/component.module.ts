import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { TableComponent } from "./table/table.component";
import { IncomingReportsComponent } from './incoming-reports/incoming-reports.component';
import { ReviewedReportsComponent } from './reviewed-reports/reviewed-reports.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    TableComponent,
    IncomingReportsComponent,
    ReviewedReportsComponent,
    ProfileComponent,
    UsersComponent,
    LoginComponent,
  ]
})
export class ComponentsModule { }

import { Routes } from '@angular/router';
import { IncomingReportsComponent } from './incoming-reports/incoming-reports.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewedReportsComponent } from './reviewed-reports/reviewed-reports.component';

import { TableComponent } from './table/table.component';
import { UsersComponent } from './users/users.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'table',
				component: TableComponent
			},
      {
				path: 'incoming-reports',
				component: IncomingReportsComponent
			},
      {
				path: 'reviewed-reports',
				component: ReviewedReportsComponent
			},
      {
				path: 'users',
				component: UsersComponent
			},
      {
				path: 'profile',
				component: ProfileComponent
			},
		]
	}
];

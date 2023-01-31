import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";

import { FullComponent } from "./layouts/full/full.component";

export const Approutes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "",
    component: FullComponent,
    children: [
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "component",
        loadChildren: () =>
          import("./components/component.module").then(
            (m) => m.ComponentsModule
          ),
      },
    ],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "**",
    component: LoginComponent,
  }
];

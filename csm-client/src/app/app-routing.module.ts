import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { csmRoutes } from './csm/csm-route';
import { baseRoute } from './base/base.route';

const routes: Routes = [
  ...csmRoutes,
  ...baseRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

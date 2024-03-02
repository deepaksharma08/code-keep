import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { csmRoutes } from './csm/csm-route';

const routes: Routes = [
  ...csmRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

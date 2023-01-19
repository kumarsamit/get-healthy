import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesUrl } from './routing-urls';



@NgModule({
  imports: [RouterModule.forRoot(routesUrl)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

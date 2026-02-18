import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurriculoPage } from './curriculo-page/curriculo-page';


const routes: Routes = [
  {
    path: "urriculo",
    component: CurriculoPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculoComponent } from './curriculo/curriculo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/meu_curriculo',
    pathMatch: 'full'
  },
  {
    path: "meu_curriculo",
    component: CurriculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

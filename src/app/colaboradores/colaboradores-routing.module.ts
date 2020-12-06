import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColaboradoresPage } from './colaboradores.page';

const routes: Routes = [
  {
    path: '',
    component: ColaboradoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColaboradoresPageRoutingModule {}

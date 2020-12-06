import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelPage } from './painel.page';

const routes: Routes = [
  
  ///////////////////////////////////// COLABORADORES

  {
    path: 'tabs',
    component: PainelPage,
    children: [
      {
        path: 'colaboradores',
        children: [
          {
            path: '',
            loadChildren: './colaboradores/colaboradores.module'
          }
        ]
      },
/////////////////////////////////// PAINEL
      {
        path: 'painel',
        children: [
          {
            path: '',
            loadChildren: '/painel/painel.module'
          }
        ]
      },
/////////////////////////////// INBOX
      {
        path: 'inbox',
        children: [
          {
            path: '',
            loadChildren: '/painel/painel.module'
          }
        ]
      },
    ]
  },

  {
  path: '',
  component: PainelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PainelPageRoutingModule {}

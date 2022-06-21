import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pagina/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'veiculos',
    loadChildren: () => import('./pagina/veiculos/veiculos.module').then( m => m.VeiculosPageModule)
  },
  {
    path: 'relatorios',
    loadChildren: () => import('./pagina/relatorios/relatorios.module').then( m => m.RelatoriosPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pagina/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'sair',
    loadChildren: () => import('./pagina/sair/sair.module').then( m => m.SairPageModule)
  },
  {
    path: 'tag',
    loadChildren: () => import('./pagina/tag/tag.module').then( m => m.TagPageModule)
  },
  {
    path: 'acesso',
    loadChildren: () => import('./acesso/acesso.module').then( m => m.AcessoPageModule)
  },
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

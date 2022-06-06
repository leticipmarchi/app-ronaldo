import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'gambiarra',
    loadChildren: () => import('./videos/gambiarra/gambiarra.module').then( m => m.GambiarraPageModule)
  },
  {
    path: 'dogo',
    loadChildren: () => import('./videos/dogo/dogo.module').then( m => m.DogoPageModule)
  },
  {
    path: 'sao-paulo',
    loadChildren: () => import('./videos/sao-paulo/sao-paulo.module').then( m => m.SaoPauloPageModule)
  },
  {
    path: 'dados-video',
    loadChildren: () => import('./dados-video/dados-video.module').then( m => m.DadosVideoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

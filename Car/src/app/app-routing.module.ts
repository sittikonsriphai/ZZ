import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'informations',
    loadChildren: () => import('./informations/informations.module').then( m => m.InformationsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'arrayz',
    loadChildren: () => import('./arrayz/arrayz.module').then( m => m.ArrayzPageModule)
  },
  {
    path: 'arrayz2',
    loadChildren: () => import('./arrayz2/arrayz2.module').then( m => m.Arrayz2PageModule)
  },
  {
    path: 'detail320d',
    loadChildren: () => import('./detail320d/detail320d.module').then( m => m.Detail320dPageModule)
  },
  {
    path: 'detailx1',
    loadChildren: () => import('./detailx1/detailx1.module').then( m => m.Detailx1PageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TESTPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';


const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{ path: 'home', loadChildren: () => import('./main/home/home.module').then(m => m.HomeModule) },
{ path: 'favourite', loadChildren: () => import('./main/favourite/favourite.module').then(m => m.FavouriteModule) },
{ path: 'author', loadChildren: () => import('./main/author/author.module').then(m => m.AuthorModule), canActivate: [AuthGuardService] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

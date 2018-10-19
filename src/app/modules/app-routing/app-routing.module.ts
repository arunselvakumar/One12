import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SiteComponent} from '../../components/home/site/site.component';

const rootRoutes: Routes = [
  { path: '', component: SiteComponent },
  { path: 'home', redirectTo: '' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(rootRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

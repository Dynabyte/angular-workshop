import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BombComponent } from './bomb/bomb.component';

const routes: Routes = [
  { path: '', redirectTo: '/bomb', pathMatch: 'full' },
  { path: 'bomb', component: BombComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

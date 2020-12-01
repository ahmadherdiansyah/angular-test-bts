import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarComponent } from './daftar.component';

const routes: Routes = [{ path: '', component: DaftarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaftarRoutingModule { }

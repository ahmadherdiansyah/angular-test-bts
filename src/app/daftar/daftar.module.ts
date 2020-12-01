import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaftarRoutingModule } from './daftar-routing.module';
import { DaftarComponent } from './daftar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [DaftarComponent],
  imports: [
    CommonModule,
    DaftarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule
  ]
})
export class DaftarModule { }

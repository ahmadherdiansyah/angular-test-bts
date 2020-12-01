import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import { Daftar, DaftarData } from './daftar.interface';
import { DaftarService } from './daftar.service';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.component.html',
  styleUrls: ['./daftar.component.scss']
})
export class DaftarComponent implements OnInit {
  hide = true;
  loginform: FormGroup;

  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private local: LocalStorageService,
    private daftarService: DaftarService
  ) {
    this.loginform = this.formBuilder.group({
      username: '',
      password:'',
      email: ''
    });
  }
  async onSubmit(userData: any) {
    try {
      const username = userData.username
      const password = userData.password
      const email = userData.email
      if (username && password) {
        this.loginform.reset();
        const data : Daftar = {
          email,
          username,
          password
        }
        await this.daftarService.daftar(data);
        this.openSnackBar('Registrasi Berhasil', 'Tutup');
        this.route.navigate(['/login'])
      } else {
        this.openSnackBar('Masukan Username / email atau password', 'Tutup');
      }
    } catch (error) {
      console.log(error)
      this.openSnackBar('Username atau Password salah', 'Tutup');
    }
  }
  ngOnInit(): void {
    const kuki = this.local.get('token');
    if (kuki) {
      this.route.navigate(['/home'])
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}

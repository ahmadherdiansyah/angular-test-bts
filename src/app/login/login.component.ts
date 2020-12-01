import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalStorageService } from 'angular-web-storage';
import { LoginService } from './login.service';
import { Login, LoginData } from './login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginform: FormGroup;

  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private local: LocalStorageService,
    private loginService: LoginService
  ) {
    this.loginform = this.formBuilder.group({
      username: '',
      password:''
    });
  }
  async onSubmit(customerData: any) {
    try {
      const username = customerData.username
      const password = customerData.password
      if (username && password) {
        this.loginform.reset();
        const data : Login = {
          username,
          password
        }
        const token : LoginData = await this.loginService.login(data);
        console.log(token)
        this.local.set('token',token.data.token)
        this.route.navigate(['/home'])
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

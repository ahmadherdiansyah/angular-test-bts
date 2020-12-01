import { Injectable } from '@angular/core';
import { BaseService } from '../common/base/base.service';
import { Login, LoginData } from './login.interface';
@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<LoginData>{

  async login(data : Login){
    const url = '/login';
    const result = this.post(url,data).toPromise()
    
    return await result;
  }
}

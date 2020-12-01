import { Injectable } from '@angular/core';
import { BaseService } from '../common/base/base.service';
import { Daftar, DaftarData, } from './daftar.interface';
@Injectable({
  providedIn: 'root'
})
export class DaftarService extends BaseService<DaftarData>{

  async daftar(data : Daftar){
    const url = '/register';
    const result = this.post(url,data).toPromise()
    
    return await result;
  }
}

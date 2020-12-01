import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: Router,
    private local: LocalStorageService,) { }

  ngOnInit(): void {
    const kuki = this.local.get('token');
    console.log(kuki)
    if (!kuki) {
      this.route.navigate(['/login'])
    }
  }
  logout(){
    this.local.remove('token');
    this.route.navigate(['/login']);
  }

}

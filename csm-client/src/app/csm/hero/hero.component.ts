import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  constructor(private route: Router) {
  }

  public logoutClick() {
    sessionStorage.clear();
    this.route.navigateByUrl('login');
  }

}

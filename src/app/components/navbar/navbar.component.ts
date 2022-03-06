import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  show=false
  constructor() { }
  onClick(){
    this.show = !this.show;
    console.log(this.show)
  }

}

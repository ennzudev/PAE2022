import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  favoritos: Number = 0;
  statusClass = 'home';
  constructor() { }

  ngOnInit(): void {
  }

  setHomeClass(){
    sessionStorage.clear();
    this.statusClass = 'home';
  }

  setNoticiasClass(){
    sessionStorage.clear();
    this.statusClass = 'noticias';
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  currentTab:string;
  constructor() { }

  ngOnInit() {
    this.currentTab = window.location.href.substr(window.location.href.lastIndexOf('/')+1)
  }

}

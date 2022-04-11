import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  lastKnownScrollPosition:any=0;
  constructor() {}
  ngOnInit(): void {
    document.addEventListener('scroll', () => {
      this.keepTrack();
    })
  }
  keepTrack(){
    this.lastKnownScrollPosition=window.scrollY;
  }
}

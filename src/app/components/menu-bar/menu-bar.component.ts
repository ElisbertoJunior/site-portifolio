import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  showFiller: boolean = false
  public myClass: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleClass() {
    this.myClass = !this.myClass
  }

}

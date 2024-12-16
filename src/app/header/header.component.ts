import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public title = '';

  @Input()
  public sideNav: MatDrawer;

  constructor() {
  }

  ngOnInit(): void {
  }

}

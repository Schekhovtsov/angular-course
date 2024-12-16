import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Output()
  public setSideNavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  @ViewChild('sideNav', { static: true })
  public sideNav: MatDrawer;

  constructor() { }

  ngOnInit(): void {
    this.setSideNavControl.emit(this.sideNav);
  }
}

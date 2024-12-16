import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public myTitle = 'Ng course';
  public mySideNav: MatDrawer;

  public setSideNav = (drawer: MatDrawer) => {
    this.mySideNav = drawer;
  }
}

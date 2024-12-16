import {Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
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

  @ViewChild('contentBlock', { static: true, read: ViewContainerRef })
  public block: ViewContainerRef;

  @ContentChild('contentTemplate', { static: true })
  public contentTmplt: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
    this.block.createEmbeddedView(this.contentTmplt)
    this.setSideNavControl.emit(this.sideNav);
  }
}

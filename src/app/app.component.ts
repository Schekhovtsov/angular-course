import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public imgHeight = 150;
  public imgSrc = 'https://raw.githubusercontent.com/igorbezsmertnyi/angular-2-rails-starterkit/master/src/logo.png';

  public clickHandler = (div: HTMLDivElement, event: MouseEvent) => {
    console.log('clicked!', div);
  };

  public searchText = '';

  public search = (value: string) => {
    this.searchText = value;
  };
}

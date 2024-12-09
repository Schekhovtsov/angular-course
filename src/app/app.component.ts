import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular10course';
  private money = 3000;

  public getSalary = () => {
    return this.money * 1.2;
  }
}

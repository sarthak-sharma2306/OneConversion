import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oneConversion';
  subTitle = 'Learning Interpolation is fun';
  epNum =12;
  user =
  {
    userId: 201,
    userName: 'Arc',
    status: 'active'
  };
  showalert()
  {
    alert('Alert!!');
  }
}

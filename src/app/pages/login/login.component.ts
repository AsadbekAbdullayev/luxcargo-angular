import { Component } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [NzInputModule, NzButtonModule],
})
export default class LoginComponent {
  bgImage: string = 'assets/img/bg.png';
}

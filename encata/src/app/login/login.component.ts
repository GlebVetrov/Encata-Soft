import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error = false;
  hide = true;

  constructor(private userService: UserService) { }

  submit() {
    if (this.loginForm.valid) {
      this.userService.getUser(this.loginForm.value)
        .subscribe(data => data.ok,
          error => {
            this.error = !error.ok;
          });
    }
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      userPassword: new FormControl('', [Validators.required])
    });
  }
}

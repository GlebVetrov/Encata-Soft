import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';

interface Hide {
  password: boolean;
  confirm: boolean;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  error = false;
  hide: Hide = {
    password: true,
    confirm: true
  };

  constructor(private userService: UserService) {}

  submit() {
    if (this.registrationForm.valid) {
      this.userService.setUser(this.registrationForm.value)
        .subscribe(data => console.log(data.ok),
          error => {
            this.error = !error.ok;
          });
    }
  }

  emailPhoneValidator(control: FormControl): {[s: string]: boolean} {
    const regEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gmi;
    const regPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
    if (regEmail.test(control.value) || regPhone.test(control.value)) {
      return null;
    }
    return {emailPhone: true};
  }

  matchingPasswords(control: AbstractControl): {[key: string]: boolean} {
    const newPassword = control.get('userPassword');
    const confirmPassword = control.get('confirmPassword');
    if (!newPassword || !confirmPassword) {
      return null;
    }
    return newPassword.value === confirmPassword.value ? null : { mismatchedPasswords: true };
  }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      userPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      emailPhone: new FormControl('', [Validators.required, this.emailPhoneValidator])
    }, [this.matchingPasswords]);
  }

}

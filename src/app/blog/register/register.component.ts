import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from '../../service/notification.service';
import {AuthenticationService} from '../../service/authentication.service';
import {IAccount} from '../../model/iaccount';
import {AccountService} from '../../service/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage = '';
  registerForm: FormGroup;
  confirmPassword = '';
  isRegisterFail = false;

  constructor(private accountService: AccountService,
              private formBuilder: FormBuilder,
              private router: Router,
              private authenService: AuthenticationService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    if (this.authenService.isLogin()) {
      alert("Bạn đã Đăng Nhập");
      this.router.navigate(['login'])
    }
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      gender: ['Male', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

  }


  submitRegister() {
    console.log('tao tai khoan')
    this.confirmPassword = (<HTMLInputElement>document.getElementById('confirmPassword')).value;
    let newAccount: IAccount = this.registerForm.value;
    if (this.confirmPassword == newAccount.password) {
      this.notificationService.success("Đăng ký thành công")
      this.accountService.createAccount(newAccount).subscribe(
        (data) => {
          if (data.message == 'Đăng ký thành công') {
            this.router.navigate(['login']);
          } else {
            this.errorMessage = data.message;

          }
          this.isRegisterFail = true;


          console.log(data)
        },
        () => {
          this.notificationService.fail("Đăng ký không thành công")
        }
      )
    } else {
      this.notificationService.fail("Mật khẩu không khớp")


    }

  }

  get name() {
    return this.registerForm.get('name')
  }

  get email() {
    return this.registerForm.get('email')
  }

  get password() {
    return this.registerForm.get('password')
  }
}

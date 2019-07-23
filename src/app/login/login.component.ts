import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ILogin } from './login.model';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logForm: FormGroup;
  loogged;
  model: ILogin = { userid: "admin", password: "admin123" };
  returnUrl: string;
  message: string;

  constructor(public router: Router, public route: ActivatedRoute,
    public formbuilder: FormBuilder,
    public auth: AuthService) {
  }

  ngOnInit() {
    this.logForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/dashboard';
    this.auth.logout();
  }
  get f() {
    return this.logForm.controls;
  }
  onSubmit() {
    console.log(this.logForm.value);
    this.router.navigate(['/dashboard']);
    if (this.logForm.invalid) {
      return;
    }
    else {
      console.log("Login successful");
      //this.authService.authLogin(this.model);
      localStorage.setItem('isLoggedIn', "true");
      this.router.navigate([this.returnUrl]);
    }
  }
}
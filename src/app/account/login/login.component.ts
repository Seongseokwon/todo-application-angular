import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {ILoginModel} from "../../shared/model/account/account-model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email : [],
    password: []
  })

  constructor(
    private router: Router,
    private fb : FormBuilder

  ) { }

  ngOnInit(): void {
  }


  linkToSignup() : void {
    this.router.navigate(['account/signup']);
  }

  loginRequest(loginFormData: ILoginModel): void {

  }
}

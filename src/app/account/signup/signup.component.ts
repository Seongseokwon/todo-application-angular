import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {AccountService} from "../service/account.service";
import {IAccountModel} from "../../shared/model/account/account-model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  signupForm = this.fb.group({
    email: [],
    password: [],
    passwordConfirm: [],
    username: [],
    nickname: []
  })

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private accountService: AccountService
  ) {
  }

  ngOnInit(): void {
  }

  linkToLogin(): void {
    this.router.navigate(['account/login']);
  }

  signupRequest(signupFormData: IAccountModel): void {
    console.log(signupFormData);

    this.accountService.createUser(signupFormData).subscribe(res => {
      console.log(res);
    }, (err) => {
      console.log(err);
    })
  }
}

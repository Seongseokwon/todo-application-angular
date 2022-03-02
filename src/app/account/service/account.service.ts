import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAccountModel, ILoginModel} from "../../shared/model/account/account-model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) {
  }

  createUser(signupFormData: IAccountModel): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/signup', signupFormData, {observe: 'response'});
  }

  login(loginFormData: ILoginModel): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/signin', loginFormData, {observe: 'response'});
  }

}

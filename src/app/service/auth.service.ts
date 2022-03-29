import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { UserModel } from '../model/UserModel';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {

   }


   entrar(UserLogin: UserLogin): Observable<UserLogin>{
     return this.http.post<UserLogin>('http://localhost:8080/user/login', UserLogin)
   }

   Cadastrar(user: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>('http://localhost:8080/user/register',user)
   }
}

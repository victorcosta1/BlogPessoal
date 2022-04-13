import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { UserModel } from '../model/UserModel';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {

   }


   entrar(UserLogin: UserLogin): Observable<UserLogin>{
     return this.http.post<UserLogin>('https://blog-pessoal1.herokuapp.com/user/login', UserLogin)
   }

   Cadastrar(user: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>('https://blog-pessoal1.herokuapp.com/user/register',user)
   }


   getByIdUser(id: number): Observable<UserModel>{
     return this.http.get<UserModel>(`https://blog-pessoal1.herokuapp.com/user/${id}`)
   }

   logado(){
     let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

     return ok
   }
}

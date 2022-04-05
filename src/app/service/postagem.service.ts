import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserPostagem } from '../model/UserPostagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

    token= {
      headers:new HttpHeaders().set('Authorization', environment.token)
    }

    getAllPostagens(): Observable<UserPostagem[]>{
      return this.http.get<UserPostagem[]>('http://localhost:8080/post', this.token)
    }

    postPostagem(postagem: UserPostagem){
      return this.http.post<UserPostagem>('http://localhost:8080/post',postagem, this.token)
    }
}

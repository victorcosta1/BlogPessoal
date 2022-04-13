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
      return this.http.get<UserPostagem[]>('https://blog-pessoal1.herokuapp.com/post', this.token)
    }

    getByIdPostagem(id: number): Observable<UserPostagem>{
      return this.http.get<UserPostagem>(`https://blog-pessoal1.herokuapp.com/post/${id}`, this.token)
    }

    postPostagem(postagem: UserPostagem){
      return this.http.post<UserPostagem>('https://blog-pessoal1.herokuapp.com/post',postagem, this.token)
    }

    putPostagem(postagem: UserPostagem): Observable<UserPostagem>{
      return this.http.put<UserPostagem>('https://blog-pessoal1.herokuapp.com/post', postagem, this.token)
    }

    deletePostagem(id: number){
      return this.http.delete(`https://blog-pessoal1.herokuapp.com/post/${id}`, this.token)
    }
}

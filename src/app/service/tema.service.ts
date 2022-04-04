import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserTema } from '../model/UserTema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

    token= {
      headers:new HttpHeaders().set('Authorization', environment.token)
    }

    //postTema
    postarTema(tema: UserTema): Observable<UserTema>{
      return this.http.post<UserTema>('http://localhost:8080/theme', tema, this.token)
    }
     //Get
    getAllTema(): Observable<UserTema[]>{
      return this.http.get<UserTema[]>('http://localhost:8080/theme', this.token)
    }

    putTema(tema: UserTema): Observable<UserTema>{
      return this.http.put<UserTema>('http://localhost:8080/theme',tema, this.token)
    }

    deleteTema(id: number){
      return this.http.delete(`http://localhost:8080/theme/${id}`, this.token)
    }

    getByIdTema(id: number): Observable<UserTema>{
      return this.http.get<UserTema>(`http://localhost:8080/theme/${id}`, this.token)
    }
}

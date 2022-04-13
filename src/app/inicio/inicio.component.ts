import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserModel } from '../model/UserModel';
import { UserPostagem } from '../model/UserPostagem';
import { UserTema } from '../model/UserTema';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: UserPostagem = new UserPostagem();
  listaPostagens: UserPostagem[];
  
  tema: UserTema = new UserTema();
  listaTemas: UserTema[];
  idTema: number;

  user: UserModel = new UserModel();
  idUser = environment.id;


  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService
  ) { }

  ngOnInit(){
    if(environment.token ==''){
      /*alert('Sua seção expirou, faça o login novamente.')*/
      this.router.navigate(['/entrar'])
    }

    this.getAllTemas()
    this.getAllPostagens()
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: UserTema[])=>{
      this.listaTemas = resp;
    })
  }

 findByIdTema(){
   this.temaService.getByIdTema(this.idTema).subscribe((resp: UserTema)=>{
     this.tema = resp;
   })
 }

 findByIdUser(){
  this.authService.getByIdUser(this.idUser).subscribe((resp:UserModel)=>{
    this.user = resp;
  })
 }

 getAllPostagens(){
   this.postagemService.getAllPostagens().subscribe((resp: UserPostagem[])=>{
    this.listaPostagens = resp;
   })
 }

  publicar(){
    this.tema.id = this.idTema;
    this.postagem.theme = this.tema;

    this.user.id = this.idUser;
    this.postagem.user = this.user

    this.postagemService.postPostagem(this.postagem).subscribe(
      
      (resp: UserPostagem) =>{
      
      this.postagem = resp
      alert("Postagem realizada com sucesso!");
      this.postagem = new UserPostagem();
      
      this.getAllPostagens();

    })
  }

  

}

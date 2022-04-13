import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPostagem } from 'src/app/model/UserPostagem';
import { UserTema } from 'src/app/model/UserTema';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: UserPostagem = new UserPostagem();
  tema: UserTema = new UserTema();
  listaTemas: UserTema[];
  idTema: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token ==''){
      /*alert('Sua seção expirou, faça o login novamente.')*/
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)

    this.findAllTemas()
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: UserPostagem) =>{
      this.postagem = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: UserTema)=>{
      this.tema = resp;
    })
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: UserTema[])=>{
      this.listaTemas = resp;
    })
  }

    atualizar(){
      this.tema.id = this.idTema
      this.postagem.theme = this.tema

      this.postagemService.putPostagem(this.postagem).subscribe((resp: UserPostagem) =>{
        this.postagem = resp

        alert('Postagem atualizada! com sucesso!')
        this.router.navigate(['/inicio'])
      })
  }

}

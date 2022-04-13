import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPostagem } from 'src/app/model/UserPostagem';
import { UserTema } from 'src/app/model/UserTema';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  postagem: UserPostagem = new UserPostagem();
  
  idPost: number


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token ==''){
      /*alert('Sua seção expirou, faça o login novamente.')*/
      this.router.navigate(['/entrar'])
    }

    this.idPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPost)

  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: UserPostagem) =>{
      this.postagem = resp
    })
  }

  

    apagar(){
      this.postagemService.deletePostagem(this.idPost).subscribe(()=>{
        alert('Postagem apagada com sucesso!')
        this.router.navigate(['/inicio'])
      })
    }
}      
      
  




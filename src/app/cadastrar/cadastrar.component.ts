import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { UserModel } from '../model/UserModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})


export class CadastrarComponent implements OnInit {
  

  user: UserModel = new UserModel
  ConfirmarSenha: String
  tipoUsuario: String

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    
  }


  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  confirmSenha(event:any){
    this.ConfirmarSenha = event.target.value
  }


  cadastrarUsuario(){

    this.user.type = this.tipoUsuario

    if(this.user.password != this.ConfirmarSenha){
      alert("Suas senhas precisam ser iguais")
    }
    else{
      this.authService.Cadastrar(this.user).subscribe(( resp:UserModel) =>{
        this.user = resp
        this.router.navigate(['/entrar'])
        alert("Usuário cadastrado com sucesso!")
      })

      }


    }
  }


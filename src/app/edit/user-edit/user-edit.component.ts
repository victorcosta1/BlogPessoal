import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserModel } from 'src/app/model/UserModel';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  idUser: number
  user: UserModel = new UserModel
  ConfirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token ==''){
      /*alert('Sua seção expirou, faça o login novamente.')*/
      this.router.navigate(['/entrar'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }


  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  confirmSenha(event:any){
    this.ConfirmarSenha = event.target.value
  }

  atualizar(){
   this.user.type = this.tipoUsuario

    if(this.user.password != this.ConfirmarSenha){
      alert("Suas senhas precisam ser iguais")
    }else{
      this.authService.Cadastrar(this.user).subscribe(( resp:UserModel) =>{
        this.user = resp
        this.router.navigate(['/inicio'])
        alert("Usuário cadastrado com sucesso! Faça login novamente")
        
        environment.token = ''
        environment.name = ''
        environment.photo = ''
        environment.id = 0
        this.router.navigate(['/entrar'])
      })
    }
      
  }
    
    

  findByIdUser(id: number){
    this.authService.getByIdUser(id).subscribe((resp: UserModel) =>{
      this.user = resp
    })
  }


}



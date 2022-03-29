import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {


  userLogin: UserLogin = new UserLogin()
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp;

      
        environment.token = this.userLogin.token
        environment.name = this.userLogin.name
        environment.photo = this.userLogin.photo
        environment.id = this.userLogin.id
        
        
        console.log(environment.token)
        console.log(environment.name)
        console.log(environment.photo)
        console.log(environment.id)


      this.router.navigate(['/inicio'])

    }, erro => {
      if(erro.status == 401 || erro == 500){
        alert('Usuário ou senha estão incorretos!')
      }
    })
  }
}

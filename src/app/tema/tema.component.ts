import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserTema } from '../model/UserTema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {
  
  tema: UserTema = new UserTema;

  listTheme: UserTema[];
  
  constructor(
    private temaService: TemaService,
    private router: Router
  ) { }

  ngOnInit(){
    if(environment.token ==''){
      /*alert('Sua seção expirou, faça o login novamente.')*/
      this.router.navigate(['/entrar'])
    }

    this.findthisAllTheme()
  }


  cadastrarTema(){
    this.temaService.postarTema(this.tema).subscribe((resp: UserTema)=>{
      this.tema = resp
      alert('Tema Cadastrado com sucesso!')
      this.findthisAllTheme()
      this.tema = new UserTema
    })
  }


  //Get
  findthisAllTheme(){
    this.temaService.getAllTema().subscribe((resp: UserTema[])=>{
      this.listTheme = resp
    })
  }
}

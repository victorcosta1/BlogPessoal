import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserTema } from 'src/app/model/UserTema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  tema: UserTema = new UserTema()

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.token ==''){
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findtByIdTema(id)
      
  }

  findtByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: UserTema) =>{
      this.tema = resp
    })
  }

  atualizar(){
    this.temaService.putTema(this.tema).subscribe((resp: UserTema)=>{
      this.tema = resp
      alert('Tema atualizado com sucesso!')
      this.router.navigate(['/tema'])
    })
  }

}

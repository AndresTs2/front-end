import { Component, OnInit } from '@angular/core';
import { ApiProService } from 'src/app/apis/api-pro.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent{
  listProfesores: any=[];

  constructor(private apiPro:ApiProService) { }

  getProfesores(){
    this.apiPro.getProfesores()
    .subscribe(listProfesores =>{(this.listProfesores=listProfesores)
    })
  }
  ngOnInit(){
    this.getProfesores();
  }

}

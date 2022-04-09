import { Component, OnInit } from '@angular/core';
import { ApiPerService } from 'src/app/apis/api-per.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})

export class GetComponent{
  listPersonajes:any=[];

 constructor(private apiPer: ApiPerService){

 }
  getPersonaje(house: string){
    this.apiPer.getPersonaje(house)
    .subscribe(listPersonajes=>{(this.listPersonajes=listPersonajes)
      console.log(listPersonajes)
    })
  }
  ngOnInit(){
    this.getPersonaje('');
  }
}



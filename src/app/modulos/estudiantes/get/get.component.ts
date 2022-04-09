import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiEstService } from 'src/app/apis/api-est.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent{
    listEstudiantes:any = [];
    newEstudiante: any []=[];

    form:FormGroup;

    constructor(private apiEst:ApiEstService,
      private fb:FormBuilder,
      private toastr: ToastrService,
      private router: Router){
        this.form =this.fb.group({
          nombre: ['',[Validators.required,Validators.maxLength(20), Validators.minLength(1)]],
          apellido: ['',[Validators.required,Validators.maxLength(20),Validators.minLength(1)]],
          identificacion: ['',[Validators.required,Validators.maxLength(10),Validators.minLength(1),Validators.pattern(/^[0-9]\d{0,10}$/)]],
          edad: ['',[Validators.required,Validators.maxLength(2),Validators.minLength(1),Validators.pattern(/^[0-9]\d{0,2}$/)]],
          casa: ['',[Validators.required,Validators.pattern('[Gg]ryffindor|[Hh]ufflepuff|[Rr]avenclaw|[Ss]lytherin')]]
        })

  }

  getEstudiantes(){
    this.apiEst.getEstudiantes()
    .subscribe(listEstudiantes =>{(this.listEstudiantes=listEstudiantes)
    })
  }

  agregarSolicitud(){
    console.log(this.form);
    
    const aspirante: any = {
      nombre: this.form.get("nombre")?.value,
      apellido: this.form.get("apellido")?.value,
      identificacion: this.form.get("identificacion")?.value,
      edad: this.form.get("edad")?.value,
      casa: this.form.get("casa")?.value,
    }
    console.log(aspirante)
    this.newEstudiante.push(aspirante)
    this.toastr.success('La solicitud fue realizada con exito', 'Solicitud registrada!');
    this.form.reset();
    console.log(this.newEstudiante);
  }

  ngOnInit(){
    this.getEstudiantes();
    }
}



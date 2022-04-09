import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListaProfesores } from '../modelos/profesores.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiProService {

  constructor(private http:HttpClient) {

  }

  getProfesores(){
    const path="http://hp-api.herokuapp.com/api/characters/staff";
    return this.http.get<ListaProfesores[]>(path)
  }
}

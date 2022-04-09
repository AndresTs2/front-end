import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListaEstudiantes } from '../modelos/estudiantes.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiEstService {

  private api="https://hp-api.herokuapp.com/api/characters"
  constructor(private http:HttpClient) {

  }

  getEstudiantes(){
    const path =`${this.api}/students`;
    return this.http.get<ListaEstudiantes[]>(path);
  }

}

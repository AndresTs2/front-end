import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListaPersonajes } from '../modelos/personajes.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiPerService {
  private api="https://hp-api.herokuapp.com/api/characters"

  constructor( private http:HttpClient) { }

  getPersonaje(house: string){
    const path =`${this.api}/house/${house}`;
    return this.http.get<ListaPersonajes>(path);
  }
}

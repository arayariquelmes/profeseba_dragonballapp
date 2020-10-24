import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../model/personaje';
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private serverUrl:string = environment.apiUrl;
  private headers:HttpHeaders = new HttpHeaders({
    'Content-Type':'application/json; charset=utf-8'
  });
  constructor(private http:HttpClient) { }

  getPersonajes():Observable<Personaje[]>{
    return this.http.get<Personaje[]>(`${this.serverUrl}/character`, {headers:this.headers});
  }
}

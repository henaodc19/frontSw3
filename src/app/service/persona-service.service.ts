import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../model/persona';
import { TipoDocumentoIdentidad } from '../model/tipoDocumentoIdentidad';



@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  endPoint = 'https://private-dc6e2a-automoviles.apiary-mock.com/personas';

  urlPersonas = 'http://localhost:8080/personas/personas';

  urlInsertar = 'http://localhost:8080/personas/registrar';

  urlDocumentos = 'http://localhost:8080/TipoDocumentos/TiposDoc';

  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private client: HttpClient) {
    this.headers.append( "Content-Type", "application/json");
  }

  listarEmpleados(): Observable<Persona[]> {
    return this.client.get<Persona[]>(this.urlPersonas);
  }

  insertPersona(persona: Persona) {
    console.log(persona);
    return this.client.post<Persona[]>(this.urlInsertar, persona);
  }

//   insertPersona(persona: Persona): Observable<any> {
//     console.log(persona);
//     return this.client.post("http://localhost:8080/personas/registrar", (persona), {headers: this.headers});
// }

  listarDocumentos(): Observable<TipoDocumentoIdentidad[]> {
    return this.client.get<TipoDocumentoIdentidad[]>(this.urlDocumentos);
  }


}

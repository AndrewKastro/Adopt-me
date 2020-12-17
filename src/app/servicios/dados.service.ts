import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DadosService {
 idperro: any=[];
 perros: any=[];
 
 mensaje2:any={"adoptado":"Adoptar"};
//  function perros(nome, sexo, fotoUrl, edad, porte, temperamento, saude){
// this.nome=nome;
// this.sexo=sexo;
//  };
  
// estoy recibiendo el id desde Adopcion
// AdopcionPendiente(id,mensaje): Observable<any>{
//   console.log('este es el id que llego '+id+' y este es el mensaje que llego aqui '+mensaje); 
 
   
// } 
//estoy enviando el nombre id 
//  DatosPerro(){
//      return this.perros;
//    }

  // this.perros.push(this.http.get(`http://localhost:3000/cachorros/${this.idperro}`));

  constructor(private http: HttpClient) { }

  MetodoGETAdocao(): Observable<any>{
 return this.http.get('http://localhost:3000/cachorros');
  }
  MetodoGETPendientes(): Observable<any>{
    return this.http.get('http://localhost:3000/cachorros/pendientes');
     }
   MetodoPUT(id,mensaje):Observable<any>{
     console.log('esta dentro del metodo PUT');
 return this.http.put(`http://localhost:3000/cachorros/${id}`,mensaje);
}
MetodoPOST(datos): Observable<any>{
  return this.http.post('http://localhost:3000/cachorros',datos);
}
MetodoDELETE(id):Observable<any>{
  return this.http.delete(`http://localhost:3000/cachorros/${id}`)
}
}

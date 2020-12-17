import { Component, OnInit } from '@angular/core';
import{DadosService} from '../../servicios/dados.service';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent implements OnInit {
  control:boolean=false;
  cachorros:any=[];
  mensaje:any={"adoptado":"Adoptar"};
  constructor(private obtenerDatos: DadosService) {
    // this.obtenerDatos.createPerro();
    // this.cachorros=this.obtenerDatos.DatosPerro();
    if(this.cachorros)
    {
   
      this.control=true;
    }
   }

  ngOnInit(): void {
  this.obtenerDatos.MetodoGETPendientes().subscribe(datos=>{
  this.cachorros=datos;
})
  }
  Denegar(id){
 this.obtenerDatos.MetodoPUT(id,this.mensaje).subscribe(datos=>{
   alert('Pronto!, O cachorro esta novamente  disponible para "Adoptar"');
 })
// console.log('este es el id recibido: '+id);
  }

}

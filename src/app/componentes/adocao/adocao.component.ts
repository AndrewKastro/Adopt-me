import { Component, OnInit } from '@angular/core';
import{DadosService} from '../../servicios/dados.service';


@Component({
  selector: 'app-adocao',
  templateUrl: './adocao.component.html',
  styleUrls: ['./adocao.component.css']
})
export class AdocaoComponent implements OnInit {
cachorros: any=[];
mensaje:any={"adoptado":"Pendiente"};
// hola: any=[];
  constructor(private perros:DadosService ) {
    
  }

  ngOnInit(): void {
   this.perros.MetodoGETAdocao().subscribe(datos=>{
this.cachorros=datos;
console.log('perros: '+this.cachorros)
   })
  }
  //al dar clic------------------------------
  AdoptarPerro(id,adocao){
    if(adocao=='Pendiente')
    alert('este cachorro ya fue escogido y esta pendiente de aprobacion');
    else
    return this.perros.MetodoPUT(id, this.mensaje).subscribe(datos=>{
      alert ('Sua solicitação de adopcao foi criada');
    });
  }
  // AdoptarPerro(id){
  //   return this.perros.AdopcionPendiente(id,{ adoptado: "morpheus"});
  //  }


}

import { Component, OnInit } from '@angular/core';
import { ParseError, ArrayType } from '@angular/compiler';
import{DadosService} from '../../servicios/dados.service';
import { Alert } from 'selenium-webdriver';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  //variables para crear un nuevo cachorro
  texto:string="C:\\fakepath\\";
  perro:any={"adoptado":"Adoptar"};

// variables para actualizar datos de un cachorro 
  DatosCachorros:any=[];
  campo:any;
  busqueda:string;
  resultado: any=[];
  result: any=[];
  readonly: boolean=true;
  controlEE:boolean=false;
  
   Actualizar()
        {
          this.readonly=false;
              for(let i=0;i<this.result.length;i++)
              {
              this.perros.MetodoPUT(this.result[i].id,this.result[i]).subscribe(datos=>{
                console.log(datos);
              })
              }
            alert('La actualizacion fue feita'); 
            this.resultado=[]
            this.result=[];
            this.controlEE=false;
          }
   Deletear()
        {
              for(let i=0;i<this.result.length;i++)
              {
                if(confirm(`Desea Excluir o cachorro: ${this.result[i].Nombre}`))
                {
                  this.perros.MetodoDELETE(this.result[i].id).subscribe(datos=>{
                    console.log(datos);
                  })
                  alert('El cachorro fue deleteado com suceso!')
                  console.log(this.result[i].id)
                }
              }
              this.resultado=[]
              this.result=[];
              this.controlEE=false;
            }

//funcion para recepcionar el criterio de busqueda 
AnadirCampo(campo){
this.campo=campo;
}

//realiza la busqueda de cachorro
Buscar()
{
  // console.log(this.resultado);
  if(this.campo)
  {
    if(this.busqueda)
    {
     
      this.resultado=[]
      this.result=[];
      for(let item of this.DatosCachorros)
      {
          // console.log('el campo: '+this.campo);
        if(item[this.campo].includes(this.busqueda))
        {
          this.resultado.push(item);
        }
      }
      if(this.resultado.length==0){
        alert('Ningun resultado fue encontrado');
      } else  this.controlEE=true;
    }else{
      alert ('Debe teclear alguma coisa para pesquisar');
      this.controlEE=false;
      this.resultado=[]
    } 
  } else{
    alert('Debe seleccionar primeramente un Criterio de Busqueda');
  } 
  
  if(this.resultado){
   for (let resultado of this.resultado){
   this.result.push(resultado);
  }
   }
  this.busqueda="";
  this.readonly=true;
  
  console.log('este es result: ');
  console.log(this.result);
  console.log(this.resultado);
  
}

 
  onSubmit(formulario)
  {
      if(formulario.status=="INVALID"){
        alert('Es obligatorio llenar todos los datos!')
      } else{
          if(this.perro.foto){
            this.perro.foto=this.perro.foto.replace(this.texto,'assets/img/');
                            }
                            this.perros.MetodoPOST(this.perro).subscribe(datos=>{
                              // console.log(datos);
                              alert('Cachorro Registrado!')
                            })
                            //llamar funcion Post aqui abajo
            }
  }
  constructor(private perros:DadosService) { }

  ngOnInit(): void {
    this.perros.MetodoGETAdocao().subscribe(datos=>{
      // console.log(datos.cachorros)
      this.DatosCachorros=datos.cachorros;
    })
  }
 

}

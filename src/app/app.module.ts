import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AdocaoComponent } from './componentes/adocao/adocao.component';
import { SolicitacaoComponent } from './componentes/solicitacao/solicitacao.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { TemplateComponent } from './componentes/template/template.component';
import { enlacesPronto } from './routas';
import { HttpClientModule } from "@angular/common/http";
import { AdminComponent } from './componentes/admin/admin.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    AdocaoComponent,
    SolicitacaoComponent,
    ContactoComponent,
    TemplateComponent,
    AdminComponent,      
  ],
  imports: [
    BrowserModule,
    enlacesPronto,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

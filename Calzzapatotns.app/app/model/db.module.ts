import { NgModule } from '@angular/core';
import {DbService} from "./db.service";
import {UserModel} from "./user.model";
import {ClienteModel} from "./cliente.model";
import {TiposMedioModel} from "./tipos_medio.model";
import {ClientesMediosModel} from "./clientes_medios.model";
import {VentaModel} from "./venta.model";

@NgModule({
  imports: [],
  providers : [DbService,UserModel,ClienteModel,TiposMedioModel,ClientesMediosModel,VentaModel],
  declarations: []
})
export class DbModule { }

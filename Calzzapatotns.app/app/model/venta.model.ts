import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {DbService} from "./db.service";

@Injectable()
export class VentaModel {

    constructor(private db :DbService ) {
    }

    public insert(venta: any) {
        this.db.getDatabase().execSQL("INSERT INTO ventas (id,codigo,fecha_asignacion,persona_autoriza,fecha_compra,lugar_compra,pago_quincenal) VALUES(?,?,?,?,?,?,?)", [venta.id, venta.cliente, venta.fecha_asignacion, venta.persona_autoriza, venta.fecha_compra, venta.lugar_compra, venta.pago_quincenal]);
    }

    public fetch() {
        return this.db.getDatabase().get("SELECT * FROM ventas");
    }

    public truncate(){
        this.db.getDatabase().execSQL("DELETE FROM ventas");
    }

}
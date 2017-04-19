import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {DbService} from "./db.service";

@Injectable()
export class ClientesMediosModel {


    constructor(private db: DbService) {
    }

    public insert(clientes_medios: any) {
        for (let cliente_medio of clientes_medios) {
            this.db.getDatabase().execSQL("INSERT INTO clientes_medios (id,cliente_id,cliente_codigo,tipomedio_id,referencia,notas,estado) VALUES(?,?,?,?,?,?,?)", [cliente_medio.id, cliente_medio.cliente_id, cliente_medio.cliente_codigo, cliente_medio.tipomedio_id, cliente_medio.referencia, cliente_medio.notas, cliente_medio.estado]);
        }
    }

    public fetch() {
        return this.db.getDatabase().all("SELECT clientes_medios.*,tipos_medio.nombre AS medio FROM clientes_medios INNER JOIN tipos_medio ON clientes_medios.tipomedio_id = tipos_medio.id");
    }

    public truncate() {
        this.db.getDatabase().execSQL("DELETE FROM clientes_medios");
    }
}
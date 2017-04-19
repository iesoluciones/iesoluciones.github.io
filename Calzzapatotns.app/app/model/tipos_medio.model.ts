import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {DbService} from "./db.service";

@Injectable()
export class TiposMedioModel {


    constructor(private db :DbService ) {
    }

    public insert(medios: any) {
        for (let medio of medios) {
            this.db.getDatabase().execSQL("INSERT INTO tipos_medio (id,nombre) VALUES(?,?)", [medio.id, medio.nombre]);
        }
    }

    public fetch() {
        return this.db.getDatabase().get("SELECT * FROM tipos_medio");
    }

    public truncate(){
        this.db.getDatabase().execSQL("DELETE FROM tipos_medio");
    }


}
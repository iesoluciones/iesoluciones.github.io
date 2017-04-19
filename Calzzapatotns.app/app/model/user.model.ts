import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {DbService} from "./db.service";

@Injectable()
export class UserModel {


    constructor(private db :DbService ) {
    }

    public insert(user: any) {
        this.db.getDatabase().execSQL("INSERT INTO user (id,email,password,first_name,last_name,cliente_id,created_at,updated_at,solicitar) VALUES(?,?,?,?,?,?,?,?,?)", [user.id, user.email, user.password, user.first_name, user.last_name, user.cliente_id, user.created_at, user.updated_at,user.solicitar]);
    }

    public fetch() {
        return this.db.getDatabase().get("SELECT * FROM user");
    }

    public truncate(){
        this.db.getDatabase().execSQL("DELETE FROM user");
    }

    public cambiarSolicitud(){
        this.db.getDatabase().get("UPDATE user SET solicitar=0");
    }


}
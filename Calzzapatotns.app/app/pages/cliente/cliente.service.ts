import {Injectable} from "@angular/core";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {HttpService} from "../../custom-http/http-service";
import {Cliente} from "./cliente.class";
import {Observable} from "rxjs";

@Injectable()
export class ClienteService {

    constructor(private http: HttpService) {
    }

    index() {
        return this.http.get("subclientes").map(response => response.json());
    }

    public save(cliente: Cliente): Observable<Cliente> {
        return this.http.post('subclientes', cliente).map(response => response.json());

    }
}

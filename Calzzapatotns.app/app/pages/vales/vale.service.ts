import {Injectable} from "@angular/core";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {HttpService} from "../../custom-http/http-service";

@Injectable()
export class ValeService {

    constructor(private http: HttpService) {
    }

    index(cliente_id) {
        return this.http.get("clientes/"+cliente_id+"/vales").map(response => response.json());
    }
}

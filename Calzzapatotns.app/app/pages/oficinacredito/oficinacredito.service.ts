import {Injectable} from "@angular/core";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {HttpService} from "../../custom-http/http-service";

@Injectable()
export class OficinacreditoService {

    constructor(private http: HttpService) {
    }

    getTiendas(datos) {
        return this.http.post("oficinasCredito",datos).map(response => response.json());
    }
}

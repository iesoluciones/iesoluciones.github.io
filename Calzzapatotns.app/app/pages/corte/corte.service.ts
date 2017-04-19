import {Injectable} from "@angular/core";
import {HttpService} from "../../custom-http/http-service";
/**
 * Created by iedeveloper on 23/03/17.
 */

@Injectable()
export class CorteService {

    constructor(private http: HttpService) {
    }

    getSaldos(codigoCliente) {
        return this.http.get("saldosDetalleSoap/"+codigoCliente).map(response => response.json());
    }
}


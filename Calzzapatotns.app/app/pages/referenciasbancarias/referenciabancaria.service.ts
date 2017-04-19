import {Injectable} from "@angular/core";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {HttpService} from "../../custom-http/http-service";

@Injectable()
export class ReferenciabancariaService {

    constructor(private http: HttpService) {
    }

    getReferenciasBancarias(codigoCliente) {
        return this.http.get("referenciasBancariasSoap/" + codigoCliente).map(response => response.json());
    }

    getReferenciasBancariasGenericas(codigoCliente) {
        return this.http.get("referenciasBancariasGenericasSoap/" + codigoCliente).map(response => response.json());
    }
}

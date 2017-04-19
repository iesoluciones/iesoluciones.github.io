import {Injectable} from "@angular/core";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {HttpService} from "../../custom-http/http-service";

@Injectable()
export class MicuentaService {

    constructor(private http: HttpService) {
    }

    geolocalizacion(codigo_cliente,dato) {
        return this.http.post("clientes/"+codigo_cliente+"/geolocalizacion", dato).map(response => response.json());
    }
}

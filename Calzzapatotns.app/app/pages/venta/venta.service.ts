import {Injectable} from "@angular/core";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {HttpService} from "../../custom-http/http-service";
import {Venta} from "./venta.class";
import {Observable} from "rxjs";

@Injectable()
export class VentaService {

    constructor(private http: HttpService) {
    }

    index() {
        return this.http.get("ventas").map(response => response.json());
    }

    public save(venta: Venta): Observable<Venta> {
        return this.http.post('ventas', venta).map(response => response.json());

    }
}

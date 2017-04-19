import {LoginComponent} from "./pages/login/login.component";
import {ModalViewComponent} from "./pages/login/modal/modal-view";
import {InicioComponent} from "./pages/inicio/inicio.component";
import {MicuentaComponent} from "./pages/micuenta/micuenta.component";
import {DatepickerComponent} from "./pages/modals/datepicker/date-picker";
import {HomeComponent} from "./pages/home/home.component";
import {MapaComponent} from "./pages/modals/mapa/mapa.component";
import {ListadoClienteComponent} from "./pages/cliente/listado/listado.cliente.component";
import {FormularioClienteComponent} from "./pages/cliente/formulario/formulario.cliente.component";
import {CorteComponent} from "./pages/corte/corte.component";
import {RecuperarComponent} from "./pages/modals/recuperar/recuperar";
import {ClienteDetalleComponent} from "./pages/cliente/detalle/cliente-detalle.component";
import {ListadoValeComponent} from "./pages/vales/listado/listado.vale.component";
import {VentaComponent} from "./pages/venta/venta.component";
import {TicketComponent} from "./pages/venta/ticket/ticket.component";
import {OficinacreditoComponent} from "./pages/oficinacredito/oficinacredito.component";
import {ReferenciabancariaComponent} from "./pages/referenciasbancarias/referenciabancaria.component";
import {SaldoDisponibleComponent} from "./pages/corte/saldo-disponible/saldo-disponible.component";

export const routes = [
    {path: '', component: LoginComponent, useAsDefault: true},
    {path: 'recuperar-email', component: ModalViewComponent},
    {path: 'home',component: HomeComponent,
        children: [
            {path: 'inicio', component: InicioComponent},
            {path: 'micuenta', component: MicuentaComponent},
            {path: 'modal-datepicker', component: DatepickerComponent},
            {path: 'modal-mapa', component: MapaComponent},
            {path: 'corte', component: CorteComponent},
            {path: 'saldo-disponible', component: SaldoDisponibleComponent},
            {path: 'clientes', component:ListadoClienteComponent},
            {path: 'cliente/create', component:FormularioClienteComponent},
            {path: 'modal-recuperar', component:RecuperarComponent},
			{path: 'cliente/detalle', component:ClienteDetalleComponent},
            {path: 'vales', component:ListadoValeComponent},
            {path: 'oficinacredito', component:OficinacreditoComponent},
            {path: 'referenciabancaria', component:ReferenciabancariaComponent},
            {path: 'ventas', component:VentaComponent},
            {path: 'ventas/ticket', component:TicketComponent}
        ]
    }
];

export const navigatableComponents = [
    LoginComponent,
    ModalViewComponent,
    InicioComponent,
    MicuentaComponent,
    DatepickerComponent,
    HomeComponent,
    MapaComponent,
    CorteComponent,
    SaldoDisponibleComponent,
    ListadoClienteComponent,
    FormularioClienteComponent,
    RecuperarComponent,
	ClienteDetalleComponent,
    ListadoValeComponent,
    OficinacreditoComponent,
    ReferenciabancariaComponent,
    VentaComponent,
    TicketComponent
];
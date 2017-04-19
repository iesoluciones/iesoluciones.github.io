import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {Router} from "@angular/router";
import {Page} from "ui/page";
import {ClienteService} from "../cliente.service";
import {AnimationCurve} from "ui/enums";
import {DatePicker} from "ui/date-picker";
import {ModalDialogService, ModalDialogOptions} from "nativescript-angular/modal-dialog";
import {DatepickerComponent} from "../../modals/datepicker/date-picker";
import {Label} from "ui/label";
import moment = require("moment");
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {CustomValidators} from "../../../shared/validators/CustomValidators";
import {Cliente} from "../cliente.class";
import {UserModel} from "../../../model/user.model";
import {RouterExtensions} from "nativescript-angular";
var dialogs = require("ui/dialogs");

@Component({
    selector: "my-app-clientes",
    providers: [ClienteService],
    templateUrl: "pages/cliente/formulario/formulario-cliente.html",
    styleUrls: ["pages/cliente/css/cliente.css"]
})
export class FormularioClienteComponent implements OnInit {
    public clientes: any[];
    form: FormGroup;
    valid=true;
    constructor(private router: Router,
                private routerExtensions: RouterExtensions,
                private page: Page,
                private _clienteService: ClienteService,
                private _userModel: UserModel,
                private vcRef: ViewContainerRef,
                private _modalService: ModalDialogService,
                private _fb: FormBuilder) {
    }

    protected validationMessages: any = {
        nombre: {
            required: "El nombre es obligatorio",
            maxLength: "El tamaño máximo del nombre es de 255 dígitos",
            minLength: "El tamaño mínimo del nombre es de 1 dígito"
        },
        paterno: {
            required: "El apellido paterno es obligatorio",
            maxLength: "El tamaño máximo del apellido paterno es de 255 dígitos",
            minLength: "El tamaño mínimo del apellido paterno es de 1 dígito"
        },
        materno: {
            required: "El apellido materno es obligatorio",
            maxLength: "El tamaño máximo del apellido materno es de 255 dígitos",
            minLength: "El tamaño mínimo del apellido materno es de 1 dígito"
        },
        celular: {
            required: "El celular es obligatorio",
            maxLength: "El tamaño máximo del celular es de 10 dígitos",
            minLength: "El tamaño mínimo del celular es de 10 dígitos",
            celular: "Ingrese un celular válido"
        },
        email: {
            required: "El email es obligatorio",
            maxLength: "El tamaño máximo del email es de 255 dígitos",
            minLength: "El tamaño mínimo del email es de 1 dígito",
            email: "El correo no corresponde con una dirección de e-mail válida."
        },
        fecha_nacimiento: {
            required: "La fecha de nacimiento es obligatoria",
            maxLength: "La tamaño máximo del fecha de nacimiento es de 255 dígitos",
            minLength: "La tamaño mínimo del fecha de nacimiento es de 1 dígito"
        },
        calle: {
            required: "La calle es obligatorio",
            maxLength: "La tamaño máximo del calle es de 255 dígitos",
            minLength: "La tamaño mínimo del calle es de 1 dígito"
        },
        numero_exterior: {
            required: "El número exterior es obligatorio",
            maxLength: "El tamaño máximo del número exterior es de 255 dígitos",
            minLength: "El tamaño mínimo del número exterior es de 1 dígito"
        },
        numero_interior: {
            required: "El número interior es obligatorio",
            maxLength: "El tamaño máximo del número interior es de 255 dígitos",
            minLength: "El tamaño mínimo del número interior es de 1 dígito"
        },
        colonia: {
            required: "La colonia es obligatorio",
            maxLength: "La tamaño máximo del colonia es de 255 dígitos",
            minLength: "La tamaño mínimo del colonia es de 1 dígito"
        },
        cp: {
            required: "El código postal es obligatorio",
            maxLength: "El tamaño máximo del código postal es de 10 dígitos",
            minLength: "El tamaño mínimo del código postal es de 1 dígito"
        }
    }

    ngOnInit() {
        this.page.actionBar.title = "Agregar Cliente";
        this.form = this._fb.group({
            nombre: [null, [Validators.required, Validators.minLength(1)]],
            paterno: [null, [Validators.required, Validators.minLength(1)]],
            materno: [null, [Validators.required, Validators.minLength(1)]],
            celular: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), CustomValidators.celular]],
            email: [null, [Validators.required, Validators.minLength(1), CustomValidators.email]],
            fecha_nacimiento: [null, [Validators.required, Validators.minLength(1)]],
            calle: [null, [Validators.required, Validators.minLength(1)]],
            numero_exterior: [null, [Validators.required, Validators.minLength(1)]],
            numero_interior: [null, [Validators.minLength(1)]],
            colonia: [null, [Validators.required, Validators.minLength(1)]],
            cp: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]]
        });
    }

    modalPicker() {
        //console.log("modalpICKER");
        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(DatepickerComponent, options)
            .then((dateresult: Date) => {
                this.form.get('fecha_nacimiento').setValue(moment(dateresult).format('DD/MM/YYYY'));
                this.onTap('label7');
            });
    }

    configure(datePicker: DatePicker) {
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    }

    public onTap(lbl) {
        var label: Label = <Label> this.page.getViewById(lbl);
        label.animate({
            translate: {x: -10, y: -15},
            duration: 500,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });
    }

    guardar() {
        let cliente: Cliente = this.form.value as Cliente;
        this.valid=false;
        console.log("Guardar :)))))",this.form.get('fecha_nacimiento'));
        this._userModel.fetch().then(usuario => {
            cliente.cliente_id = usuario.cliente_id;
            console.log("Va a guardar", JSON.stringify(cliente));
            this._clienteService.save(cliente).subscribe(d => {
                let route = this.routerExtensions;
                dialogs.alert({
                    title: "Cliente",
                    message: "El cliente se agregó correctamente.",
                    okButtonText: "Aceptar"
                }).then(function () {
                    route.navigate(["/home/clientes"], {clearHistory: true});
                });
            });
        });
    }
}
import {Component, OnInit} from "@angular/core";
import {ModalDialogParams} from "nativescript-angular/modal-dialog";
import {Page} from "ui/page";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Label} from "ui/label";
import {AnimationCurve} from "ui/enums";
import {CustomValidators} from "../../../shared/validators/CustomValidators";

@Component({
    moduleId: module.id,
    templateUrl: "./recuperar.html",
    styleUrls: ["./recuperar-common.css"]

})
export class RecuperarComponent implements OnInit {
    form: FormGroup;
    valid = false;
    public user={
        password:'',
        password_confirm:''
    }
    protected validationMessages: any = {
        password: {
            required: "El contraseña es obligatoria",
            minLength: "El tamaño mínimo de la contraseña es de 1 dígito",
            password: "La contraseña por lo menos debe tener 8 caracteres."
        },
        password_confirm: {
            required: "El confirmación de contraseña es obligatorio",
            minLength: "El tamaño mínimo de la confirmación de contraseña es de 1 dígitos",
            password: "La contraseña por lo menos debe tener 8 caracteres."

        }
    };

    constructor(private params: ModalDialogParams, private page: Page, private _fb: FormBuilder) {
    }

    ngOnInit() {
        this.form = this._fb.group({
            password: [null, [Validators.required, Validators.minLength(8),CustomValidators.password]],
            password_confirm: [null, [Validators.required, Validators.minLength(8)],CustomValidators.password]
        });
        this.onTap('label1');
    }
    validarPassword(){
        let usr = this.form.value;
        this.valid = false;

        if(usr.password == usr.password_confirm && usr.password.length >=8 && usr.password_confirm.length>=8){
            this.valid = true;
        }
        return this.valid;

    }
    public onTap(lbl) {
        var label: Label = <Label> this.page.getViewById(lbl);
        label.animate({
            translate: {x: 0, y: -15},
            duration: 500,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });
    }

    public recuperar() {
        this.params.closeCallback(this.form.value);
    }

    cerrar() {
        this.params.closeCallback(null);
    }
}

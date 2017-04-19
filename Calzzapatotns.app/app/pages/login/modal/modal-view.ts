import {Component, OnInit} from "@angular/core";
import {ModalDialogParams} from "nativescript-angular/modal-dialog";
import {Page} from "ui/page";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {CustomValidators} from "../../../shared/validators/CustomValidators";
import {Label} from "ui/label";
import {AnimationCurve} from "ui/enums";

// >> passing-parameters
@Component({
    moduleId: module.id,
    //templateUrl: "./modal-view.html",
    template: ` 
        <ScrollView class="modal-view-style">
          <StackLayout [formGroup]="form" style="margin: 0px;padding: 0px;height: 100%">
              <Label class="title" text="Recuperar Contraseña" style="margin: 15px 0px 15px 15px"></Label> 
              
              <GridLayout rows="20 auto,auto">
                <Label row="1" id="label1" fontSize="15" (tap)="onTap('label1')" text="Usuario" textWrap="true"></Label>
                <TextField keyboardType="next"  (tap)="onTap('label1')" fontSize="15" row="1"  text="" formControlName="usuario"></TextField>
                <app-error-feedback row="2" [messages]="validationMessages.usuario" [formGroup]="form" controlName="usuario"></app-error-feedback>
              </GridLayout> 
              <GridLayout rows="20 auto,auto">
                <Label row="1" id="label6" fontSize="15" (tap)="onTap('label6')" text="Email" textWrap="true"></Label>
                <TextField keyboardType="next"  (tap)="onTap('label6')" fontSize="15" row="1"  text="" formControlName="email"></TextField>
                <app-error-feedback [messages]="validationMessages.email" [formGroup]="form" controlName="email"></app-error-feedback>
              </GridLayout>
              
              <Label text="ó" horizontalAlignment="center" marginBottom="1%"></Label>
              
              <GridLayout rows="20 auto,auto">
                <Label row="1" id="label4" fontSize="15" (tap)="onTap('label4')" text="Celular" textWrap="true"></Label>
                <TextField keyboardType="phone"  (tap)="onTap('label4')" fontSize="15" row="1"  text="" formControlName="celular"></TextField>
                <app-error-feedback [messages]="validationMessages.celular" [formGroup]="form" controlName="celular"></app-error-feedback>
              </GridLayout>
              <GridLayout rows="auto"  columns="*, *" style="margin: 0px 15px 15px 15px;">
                <Button row="1" col="0" [text]="'CANCELAR'" class="button-save" style="width: 100%" (tap)="cerrar()" horizontalAlignment="center" verticalAlignment="center"></Button>
                <Button row="1" col="1" [text]="'SOLICITAR'" class="button-save" style="width: 100%"  [ngClass]="{'style1': !form.valid}" isEnabled = "{{form.valid}}" (tap)="solicitar()" horizontalAlignment="center" verticalAlignment="center"></Button>
              </GridLayout> 
          </StackLayout>
        </ScrollView>
    `,
    styleUrls: ["./../login-common.css", "./../login.css"]
})
export class ModalViewComponent implements OnInit {
    form: FormGroup;

    public user: any = {
        usuario: '',
        email: '',
        celular: ''
    };
    protected validationMessages: any = {
        usuario: {
            required: "El usuario es obligatorio",
            maxLength: "El tamaño máximo del usuario es de 255 dígitos",
            minLength: "El tamaño mínimo del usuario es de 1 dígito"
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
            email: "El correo no válido."
        }
    }

    constructor(private params: ModalDialogParams, private page: Page, private _fb: FormBuilder) {

    }

    ngOnInit() {
        this.form = this._fb.group({
            usuario: ['58536', [Validators.required, Validators.minLength(1)]],
            celular: ['', [CustomValidators.celular]],
            email: ['heris161993@gmail.com', [CustomValidators.email]]
        });
        this.onTap('label1');
        this.onTap('label4');
        this.onTap('label6');
    }

    public solicitar() {
        //alert("Usuario recuperar => "+JSON.stringify(this.form.value));
        this.params.closeCallback(this.form.value);
    }
    public onTap(lbl) {
            var label: Label = <Label> this.page.getViewById(lbl);
            label.animate({
                translate: {x: 15, y: -15},
                duration: 500,
                curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            });
        }
    cerrar() {
        this.params.closeCallback(null);
    }
}
// << passing-parameters

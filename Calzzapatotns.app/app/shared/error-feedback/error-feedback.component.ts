import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {isNullOrUndefined} from "utils/types";


@Component({
    selector: 'app-error-feedback',
    template: `
      <Label  *ngIf="formErrors"  text="{{ formErrors }}" row="2" style="margin:0px 0px 0px 10px;padding:0px 0px 0px 10px;color:red" textWrap="true"></Label>
`
})

export class ErrorFeedbackComponent implements OnInit {

    //@Input('validationMessages') validationMessages: any;

    @Input('formGroup') form: FormGroup;
    @Input('controlName') name: string;

    formErrors: string = '';

    @Input()
    set messages(msgs: any) {
        this.validationMessages = (msgs) ? msgs : this.validationMessages;
    }


    private validationMessages = {
        'date': 'El campo no corresponde con una fecha válida.',
        'email': 'El campo no corresponde con una dirección de e-mail válida.',
        'required': 'El campo es obligatorio',
        'minlength': 'El campo debe contener al menos x caracteres.',
        'maxlength': 'El campo debe contener x caracteres como máximo.',
        'formatoNumero': 'El campo debe ser numérico'

    };


    constructor() {
    }

    ngOnInit() {
        this.form.valueChanges
            .subscribe(data => this.onValueChanged(data));
    }

    onValueChanged(data?: any) {

        if (!this.form) {
            return;
        }

        const form = this.form;

        this.formErrors = '';
        const control = form.get(this.name);

        if (control && control.dirty && !control.valid) {
            let attribute = this.name;
            const messages = this.validationMessages;

            for (const key in control.errors) {
                if (!isNullOrUndefined(messages[key])) {
                    this.formErrors = messages[key];
                }
            }
        }

    }


}

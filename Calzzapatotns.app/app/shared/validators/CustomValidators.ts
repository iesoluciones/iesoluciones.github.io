import {FormControl} from '@angular/forms';
import {isNullOrUndefined} from "utils/types";

export class CustomValidators {
    static email(control: FormControl): any {
        let exp: any = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if (!isNullOrUndefined(control.value) && control.value !== "" && !exp.test(control.value)) {
            return {'email': true, 'currentValue': control.value};
        }
        return null;
    }

    static telefono(control: FormControl): any {
        let exp: any = /^\+\d{2,3}\s\d{10}$/;
        if (!isNullOrUndefined(control.value) && !exp.test(control.value)) {
            return {'telefono': true, 'currentValue': control.value};
        }
        return null;
    }

	static celular(control: FormControl): any {
		let exp: any = /^[0-9]{10}$/;
		if (!isNullOrUndefined(control.value) && control.value !== "" && !exp.test(control.value)) {
			return {'celular': true, 'currentValue': control.value};
		}
		return null;
	}

    static password(control: FormControl): any {
        let exp: any =  /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
        if (!isNullOrUndefined(control.value) && control.value !== "" && !exp.test(control.value)) {
            return {'password': true, 'currentValue': control.value};
        }
        return null;
    }
}

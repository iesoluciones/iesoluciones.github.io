"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var cliente_service_1 = require("../cliente.service");
var enums_1 = require("ui/enums");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var date_picker_1 = require("../../modals/datepicker/date-picker");
var moment = require("moment");
var forms_1 = require("@angular/forms");
var CustomValidators_1 = require("../../../shared/validators/CustomValidators");
var user_model_1 = require("../../../model/user.model");
var nativescript_angular_1 = require("nativescript-angular");
var dialogs = require("ui/dialogs");
var FormularioClienteComponent = (function () {
    function FormularioClienteComponent(router, routerExtensions, page, _clienteService, _userModel, vcRef, _modalService, _fb) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this._clienteService = _clienteService;
        this._userModel = _userModel;
        this.vcRef = vcRef;
        this._modalService = _modalService;
        this._fb = _fb;
        this.valid = true;
        this.validationMessages = {
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
        };
    }
    FormularioClienteComponent.prototype.ngOnInit = function () {
        this.page.actionBar.title = "Agregar Cliente";
        this.form = this._fb.group({
            nombre: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            paterno: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            materno: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            celular: [null, [forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(10), CustomValidators_1.CustomValidators.celular]],
            email: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1), CustomValidators_1.CustomValidators.email]],
            fecha_nacimiento: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            calle: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            numero_exterior: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            numero_interior: [null, [forms_1.Validators.minLength(1)]],
            colonia: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            cp: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(10)]]
        });
    };
    FormularioClienteComponent.prototype.modalPicker = function () {
        var _this = this;
        //console.log("modalpICKER");
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(date_picker_1.DatepickerComponent, options)
            .then(function (dateresult) {
            _this.form.get('fecha_nacimiento').setValue(moment(dateresult).format('DD/MM/YYYY'));
            _this.onTap('label7');
        });
    };
    FormularioClienteComponent.prototype.configure = function (datePicker) {
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    };
    FormularioClienteComponent.prototype.onTap = function (lbl) {
        var label = this.page.getViewById(lbl);
        label.animate({
            translate: { x: -10, y: -15 },
            duration: 500,
            curve: enums_1.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });
    };
    FormularioClienteComponent.prototype.guardar = function () {
        var _this = this;
        var cliente = this.form.value;
        this.valid = false;
        console.log("Guardar :)))))", this.form.get('fecha_nacimiento'));
        this._userModel.fetch().then(function (usuario) {
            cliente.cliente_id = usuario.cliente_id;
            console.log("Va a guardar", JSON.stringify(cliente));
            _this._clienteService.save(cliente).subscribe(function (d) {
                var route = _this.routerExtensions;
                dialogs.alert({
                    title: "Cliente",
                    message: "El cliente se agregó correctamente.",
                    okButtonText: "Aceptar"
                }).then(function () {
                    route.navigate(["/home/clientes"], { clearHistory: true });
                });
            });
        });
    };
    FormularioClienteComponent = __decorate([
        core_1.Component({
            selector: "my-app-clientes",
            providers: [cliente_service_1.ClienteService],
            templateUrl: "pages/cliente/formulario/formulario-cliente.html",
            styleUrls: ["pages/cliente/css/cliente.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, nativescript_angular_1.RouterExtensions, page_1.Page, cliente_service_1.ClienteService, user_model_1.UserModel, core_1.ViewContainerRef, modal_dialog_1.ModalDialogService, forms_1.FormBuilder])
    ], FormularioClienteComponent);
    return FormularioClienteComponent;
}());
exports.FormularioClienteComponent = FormularioClienteComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXVsYXJpby5jbGllbnRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvcm11bGFyaW8uY2xpZW50ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFrRCxlQUFlLENBQUMsQ0FBQTtBQUNsRSx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxxQkFBbUIsU0FBUyxDQUFDLENBQUE7QUFDN0IsZ0NBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFDbEQsc0JBQTZCLFVBQVUsQ0FBQyxDQUFBO0FBRXhDLDZCQUFxRCxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3pGLDRCQUFrQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBRXhFLElBQU8sTUFBTSxXQUFXLFFBQVEsQ0FBQyxDQUFDO0FBQ2xDLHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLGlDQUErQiw2Q0FBNkMsQ0FBQyxDQUFBO0FBRTdFLDJCQUF3QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3BELHFDQUErQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ3RELElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQVFwQztJQUlJLG9DQUFvQixNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLElBQVUsRUFDVixlQUErQixFQUMvQixVQUFxQixFQUNyQixLQUF1QixFQUN2QixhQUFpQyxFQUNqQyxHQUFnQjtRQVBoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1Ysb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBQ2pDLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFScEMsVUFBSyxHQUFDLElBQUksQ0FBQztRQVdELHVC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fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7Q2xpZW50ZVNlcnZpY2V9IGZyb20gXCIuLi9jbGllbnRlLnNlcnZpY2VcIjtcbmltcG9ydCB7QW5pbWF0aW9uQ3VydmV9IGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0IHtEYXRlUGlja2VyfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcbmltcG9ydCB7TW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7RGF0ZXBpY2tlckNvbXBvbmVudH0gZnJvbSBcIi4uLy4uL21vZGFscy9kYXRlcGlja2VyL2RhdGUtcGlja2VyXCI7XG5pbXBvcnQge0xhYmVsfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7Q3VzdG9tVmFsaWRhdG9yc30gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC92YWxpZGF0b3JzL0N1c3RvbVZhbGlkYXRvcnNcIjtcbmltcG9ydCB7Q2xpZW50ZX0gZnJvbSBcIi4uL2NsaWVudGUuY2xhc3NcIjtcbmltcG9ydCB7VXNlck1vZGVsfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWwvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbnZhciBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcC1jbGllbnRlc1wiLFxuICAgIHByb3ZpZGVyczogW0NsaWVudGVTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9jbGllbnRlL2Zvcm11bGFyaW8vZm9ybXVsYXJpby1jbGllbnRlLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2NsaWVudGUvY3NzL2NsaWVudGUuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEZvcm11bGFyaW9DbGllbnRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgY2xpZW50ZXM6IGFueVtdO1xuICAgIGZvcm06IEZvcm1Hcm91cDtcbiAgICB2YWxpZD10cnVlO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jbGllbnRlU2VydmljZTogQ2xpZW50ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfdXNlck1vZGVsOiBVc2VyTW9kZWwsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIpIHtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdmFsaWRhdGlvbk1lc3NhZ2VzOiBhbnkgPSB7XG4gICAgICAgIG5vbWJyZToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiRWwgbm9tYnJlIGVzIG9ibGlnYXRvcmlvXCIsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IFwiRWwgdGFtYcOxbyBtw6F4aW1vIGRlbCBub21icmUgZXMgZGUgMjU1IGTDrWdpdG9zXCIsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IFwiRWwgdGFtYcOxbyBtw61uaW1vIGRlbCBub21icmUgZXMgZGUgMSBkw61naXRvXCJcbiAgICAgICAgfSxcbiAgICAgICAgcGF0ZXJubzoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiRWwgYXBlbGxpZG8gcGF0ZXJubyBlcyBvYmxpZ2F0b3Jpb1wiLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiBcIkVsIHRhbWHDsW8gbcOheGltbyBkZWwgYXBlbGxpZG8gcGF0ZXJubyBlcyBkZSAyNTUgZMOtZ2l0b3NcIixcbiAgICAgICAgICAgIG1pbkxlbmd0aDogXCJFbCB0YW1hw7FvIG3DrW5pbW8gZGVsIGFwZWxsaWRvIHBhdGVybm8gZXMgZGUgMSBkw61naXRvXCJcbiAgICAgICAgfSxcbiAgICAgICAgbWF0ZXJubzoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiRWwgYXBlbGxpZG8gbWF0ZXJubyBlcyBvYmxpZ2F0b3Jpb1wiLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiBcIkVsIHRhbWHDsW8gbcOheGltbyBkZWwgYXBlbGxpZG8gbWF0ZXJubyBlcyBkZSAyNTUgZMOtZ2l0b3NcIixcbiAgICAgICAgICAgIG1pbkxlbmd0aDogXCJFbCB0YW1hw7FvIG3DrW5pbW8gZGVsIGFwZWxsaWRvIG1hdGVybm8gZXMgZGUgMSBkw61naXRvXCJcbiAgICAgICAgfSxcbiAgICAgICAgY2VsdWxhcjoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiRWwgY2VsdWxhciBlcyBvYmxpZ2F0b3Jpb1wiLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiBcIkVsIHRhbWHDsW8gbcOheGltbyBkZWwgY2VsdWxhciBlcyBkZSAxMCBkw61naXRvc1wiLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiBcIkVsIHRhbWHDsW8gbcOtbmltbyBkZWwgY2VsdWxhciBlcyBkZSAxMCBkw61naXRvc1wiLFxuICAgICAgICAgICAgY2VsdWxhcjogXCJJbmdyZXNlIHVuIGNlbHVsYXIgdsOhbGlkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogXCJFbCBlbWFpbCBlcyBvYmxpZ2F0b3Jpb1wiLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiBcIkVsIHRhbWHDsW8gbcOheGltbyBkZWwgZW1haWwgZXMgZGUgMjU1IGTDrWdpdG9zXCIsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IFwiRWwgdGFtYcOxbyBtw61uaW1vIGRlbCBlbWFpbCBlcyBkZSAxIGTDrWdpdG9cIixcbiAgICAgICAgICAgIGVtYWlsOiBcIkVsIGNvcnJlbyBubyBjb3JyZXNwb25kZSBjb24gdW5hIGRpcmVjY2nDs24gZGUgZS1tYWlsIHbDoWxpZGEuXCJcbiAgICAgICAgfSxcbiAgICAgICAgZmVjaGFfbmFjaW1pZW50bzoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiTGEgZmVjaGEgZGUgbmFjaW1pZW50byBlcyBvYmxpZ2F0b3JpYVwiLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiBcIkxhIHRhbWHDsW8gbcOheGltbyBkZWwgZmVjaGEgZGUgbmFjaW1pZW50byBlcyBkZSAyNTUgZMOtZ2l0b3NcIixcbiAgICAgICAgICAgIG1pbkxlbmd0aDogXCJMYSB0YW1hw7FvIG3DrW5pbW8gZGVsIGZlY2hhIGRlIG5hY2ltaWVudG8gZXMgZGUgMSBkw61naXRvXCJcbiAgICAgICAgfSxcbiAgICAgICAgY2FsbGU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIkxhIGNhbGxlIGVzIG9ibGlnYXRvcmlvXCIsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IFwiTGEgdGFtYcOxbyBtw6F4aW1vIGRlbCBjYWxsZSBlcyBkZSAyNTUgZMOtZ2l0b3NcIixcbiAgICAgICAgICAgIG1pbkxlbmd0aDogXCJMYSB0YW1hw7FvIG3DrW5pbW8gZGVsIGNhbGxlIGVzIGRlIDEgZMOtZ2l0b1wiXG4gICAgICAgIH0sXG4gICAgICAgIG51bWVyb19leHRlcmlvcjoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiRWwgbsO6bWVybyBleHRlcmlvciBlcyBvYmxpZ2F0b3Jpb1wiLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiBcIkVsIHRhbWHDsW8gbcOheGltbyBkZWwgbsO6bWVybyBleHRlcmlvciBlcyBkZSAyNTUgZMOtZ2l0b3NcIixcbiAgICAgICAgICAgIG1pbkxlbmd0aDogXCJFbCB0YW1hw7FvIG3DrW5pbW8gZGVsIG7Dum1lcm8gZXh0ZXJpb3IgZXMgZGUgMSBkw61naXRvXCJcbiAgICAgICAgfSxcbiAgICAgICAgbnVtZXJvX2ludGVyaW9yOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogXCJFbCBuw7ptZXJvIGludGVyaW9yIGVzIG9ibGlnYXRvcmlvXCIsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IFwiRWwgdGFtYcOxbyBtw6F4aW1vIGRlbCBuw7ptZXJvIGludGVyaW9yIGVzIGRlIDI1NSBkw61naXRvc1wiLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiBcIkVsIHRhbWHDsW8gbcOtbmltbyBkZWwgbsO6bWVybyBpbnRlcmlvciBlcyBkZSAxIGTDrWdpdG9cIlxuICAgICAgICB9LFxuICAgICAgICBjb2xvbmlhOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogXCJMYSBjb2xvbmlhIGVzIG9ibGlnYXRvcmlvXCIsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IFwiTGEgdGFtYcOxbyBtw6F4aW1vIGRlbCBjb2xvbmlhIGVzIGRlIDI1NSBkw61naXRvc1wiLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiBcIkxhIHRhbWHDsW8gbcOtbmltbyBkZWwgY29sb25pYSBlcyBkZSAxIGTDrWdpdG9cIlxuICAgICAgICB9LFxuICAgICAgICBjcDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiRWwgY8OzZGlnbyBwb3N0YWwgZXMgb2JsaWdhdG9yaW9cIixcbiAgICAgICAgICAgIG1heExlbmd0aDogXCJFbCB0YW1hw7FvIG3DoXhpbW8gZGVsIGPDs2RpZ28gcG9zdGFsIGVzIGRlIDEwIGTDrWdpdG9zXCIsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IFwiRWwgdGFtYcOxbyBtw61uaW1vIGRlbCBjw7NkaWdvIHBvc3RhbCBlcyBkZSAxIGTDrWdpdG9cIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXIudGl0bGUgPSBcIkFncmVnYXIgQ2xpZW50ZVwiO1xuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBub21icmU6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMSldXSxcbiAgICAgICAgICAgIHBhdGVybm86IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMSldXSxcbiAgICAgICAgICAgIG1hdGVybm86IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMSldXSxcbiAgICAgICAgICAgIGNlbHVsYXI6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMTApLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMCksIEN1c3RvbVZhbGlkYXRvcnMuY2VsdWxhcl1dLFxuICAgICAgICAgICAgZW1haWw6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMSksIEN1c3RvbVZhbGlkYXRvcnMuZW1haWxdXSxcbiAgICAgICAgICAgIGZlY2hhX25hY2ltaWVudG86IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMSldXSxcbiAgICAgICAgICAgIGNhbGxlOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEpXV0sXG4gICAgICAgICAgICBudW1lcm9fZXh0ZXJpb3I6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMSldXSxcbiAgICAgICAgICAgIG51bWVyb19pbnRlcmlvcjogW251bGwsIFtWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKV1dLFxuICAgICAgICAgICAgY29sb25pYTogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKV1dLFxuICAgICAgICAgICAgY3A6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMSksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwKV1dXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1vZGFsUGlja2VyKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwibW9kYWxwSUNLRVJcIik7XG4gICAgICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgLy8gPj4gcmV0dXJuaW5nLXJlc3VsdFxuICAgICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKERhdGVwaWNrZXJDb21wb25lbnQsIG9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigoZGF0ZXJlc3VsdDogRGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5nZXQoJ2ZlY2hhX25hY2ltaWVudG8nKS5zZXRWYWx1ZShtb21lbnQoZGF0ZXJlc3VsdCkuZm9ybWF0KCdERC9NTS9ZWVlZJykpO1xuICAgICAgICAgICAgICAgIHRoaXMub25UYXAoJ2xhYmVsNycpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uZmlndXJlKGRhdGVQaWNrZXI6IERhdGVQaWNrZXIpIHtcbiAgICAgICAgZGF0ZVBpY2tlci55ZWFyID0gMTk4MDtcbiAgICAgICAgZGF0ZVBpY2tlci5tb250aCA9IDI7XG4gICAgICAgIGRhdGVQaWNrZXIuZGF5ID0gOTtcbiAgICAgICAgZGF0ZVBpY2tlci5taW5EYXRlID0gbmV3IERhdGUoMTk3NSwgMCwgMjkpO1xuICAgICAgICBkYXRlUGlja2VyLm1heERhdGUgPSBuZXcgRGF0ZSgyMDQ1LCA0LCAxMik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGFwKGxibCkge1xuICAgICAgICB2YXIgbGFiZWw6IExhYmVsID0gPExhYmVsPiB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQobGJsKTtcbiAgICAgICAgbGFiZWwuYW5pbWF0ZSh7XG4gICAgICAgICAgICB0cmFuc2xhdGU6IHt4OiAtMTAsIHk6IC0xNX0sXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDAuMSwgMC4xLCAwLjEsIDEpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGd1YXJkYXIoKSB7XG4gICAgICAgIGxldCBjbGllbnRlOiBDbGllbnRlID0gdGhpcy5mb3JtLnZhbHVlIGFzIENsaWVudGU7XG4gICAgICAgIHRoaXMudmFsaWQ9ZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR3VhcmRhciA6KSkpKSlcIix0aGlzLmZvcm0uZ2V0KCdmZWNoYV9uYWNpbWllbnRvJykpO1xuICAgICAgICB0aGlzLl91c2VyTW9kZWwuZmV0Y2goKS50aGVuKHVzdWFyaW8gPT4ge1xuICAgICAgICAgICAgY2xpZW50ZS5jbGllbnRlX2lkID0gdXN1YXJpby5jbGllbnRlX2lkO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJWYSBhIGd1YXJkYXJcIiwgSlNPTi5zdHJpbmdpZnkoY2xpZW50ZSkpO1xuICAgICAgICAgICAgdGhpcy5fY2xpZW50ZVNlcnZpY2Uuc2F2ZShjbGllbnRlKS5zdWJzY3JpYmUoZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZXJFeHRlbnNpb25zO1xuICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDbGllbnRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRWwgY2xpZW50ZSBzZSBhZ3JlZ8OzIGNvcnJlY3RhbWVudGUuXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUubmF2aWdhdGUoW1wiL2hvbWUvY2xpZW50ZXNcIl0sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19
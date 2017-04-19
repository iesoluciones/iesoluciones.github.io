"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var forms_1 = require("@angular/forms");
var enums_1 = require("ui/enums");
var CustomValidators_1 = require("../../../shared/validators/CustomValidators");
var RecuperarComponent = (function () {
    function RecuperarComponent(params, page, _fb) {
        this.params = params;
        this.page = page;
        this._fb = _fb;
        this.valid = false;
        this.user = {
            password: '',
            password_confirm: ''
        };
        this.validationMessages = {
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
    }
    RecuperarComponent.prototype.ngOnInit = function () {
        this.form = this._fb.group({
            password: [null, [forms_1.Validators.required, forms_1.Validators.minLength(8), CustomValidators_1.CustomValidators.password]],
            password_confirm: [null, [forms_1.Validators.required, forms_1.Validators.minLength(8)], CustomValidators_1.CustomValidators.password]
        });
        this.onTap('label1');
    };
    RecuperarComponent.prototype.validarPassword = function () {
        var usr = this.form.value;
        this.valid = false;
        if (usr.password == usr.password_confirm && usr.password.length >= 8 && usr.password_confirm.length >= 8) {
            this.valid = true;
        }
        return this.valid;
    };
    RecuperarComponent.prototype.onTap = function (lbl) {
        var label = this.page.getViewById(lbl);
        label.animate({
            translate: { x: 0, y: -15 },
            duration: 500,
            curve: enums_1.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });
    };
    RecuperarComponent.prototype.recuperar = function () {
        this.params.closeCallback(this.form.value);
    };
    RecuperarComponent.prototype.cerrar = function () {
        this.params.closeCallback(null);
    };
    RecuperarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./recuperar.html",
            styleUrls: ["./recuperar-common.css"]
        }), 
        __metadata('design:paramtypes', [modal_dialog_1.ModalDialogParams, page_1.Page, forms_1.FormBuilder])
    ], RecuperarComponent);
    return RecuperarComponent;
}());
exports.RecuperarComponent = RecuperarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdXBlcmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjdXBlcmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsNkJBQWdDLG1DQUFtQyxDQUFDLENBQUE7QUFDcEUscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBQzdCLHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBRWxFLHNCQUE2QixVQUFVLENBQUMsQ0FBQTtBQUN4QyxpQ0FBK0IsNkNBQTZDLENBQUMsQ0FBQTtBQVE3RTtJQXFCSSw0QkFBb0IsTUFBeUIsRUFBVSxJQUFVLEVBQVUsR0FBZ0I7UUFBdkUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQW5CM0YsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNQLFNBQUksR0FBQztZQUNSLFFBQVEsRUFBQyxFQUFFO1lBQ1gsZ0JBQWdCLEVBQUMsRUFBRTtTQUN0QixDQUFBO1FBQ1MsdUJBQWtCLEdBQVE7WUFDaEMsUUFBUSxFQUFFO2dCQUNOLFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFNBQVMsRUFBRSxrREFBa0Q7Z0JBQzdELFFBQVEsRUFBRSxxREFBcUQ7YUFDbEU7WUFDRCxnQkFBZ0IsRUFBRTtnQkFDZCxRQUFRLEVBQUUsOENBQThDO2dCQUN4RCxTQUFTLEVBQUUsbUVBQW1FO2dCQUM5RSxRQUFRLEVBQUUscURBQXFEO2FBRWxFO1NBQ0osQ0FBQztJQUdGLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN2QixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxtQ0FBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxRixnQkFBZ0IsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsbUNBQWdCLENBQUMsUUFBUSxDQUFDO1NBQ3JHLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELDRDQUFlLEdBQWY7UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxnQkFBZ0IsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBRyxDQUFDLElBQUksR0FBRyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sSUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2xHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUV0QixDQUFDO0lBQ00sa0NBQUssR0FBWixVQUFhLEdBQUc7UUFDWixJQUFJLEtBQUssR0FBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNWLFNBQVMsRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQ3pCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsS0FBSyxFQUFFLHNCQUFjLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUN0RCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sc0NBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQTlETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUV4QyxDQUFDOzswQkFBQTtJQTBERix5QkFBQztBQUFELENBQUMsQUF6REQsSUF5REM7QUF6RFksMEJBQWtCLHFCQXlEOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge01vZGFsRGlhbG9nUGFyYW1zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge0Zvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtMYWJlbH0gZnJvbSBcInVpL2xhYmVsXCI7XG5pbXBvcnQge0FuaW1hdGlvbkN1cnZlfSBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCB7Q3VzdG9tVmFsaWRhdG9yc30gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC92YWxpZGF0b3JzL0N1c3RvbVZhbGlkYXRvcnNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JlY3VwZXJhci5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3JlY3VwZXJhci1jb21tb24uY3NzXCJdXG5cbn0pXG5leHBvcnQgY2xhc3MgUmVjdXBlcmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBmb3JtOiBGb3JtR3JvdXA7XG4gICAgdmFsaWQgPSBmYWxzZTtcbiAgICBwdWJsaWMgdXNlcj17XG4gICAgICAgIHBhc3N3b3JkOicnLFxuICAgICAgICBwYXNzd29yZF9jb25maXJtOicnXG4gICAgfVxuICAgIHByb3RlY3RlZCB2YWxpZGF0aW9uTWVzc2FnZXM6IGFueSA9IHtcbiAgICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIkVsIGNvbnRyYXNlw7FhIGVzIG9ibGlnYXRvcmlhXCIsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IFwiRWwgdGFtYcOxbyBtw61uaW1vIGRlIGxhIGNvbnRyYXNlw7FhIGVzIGRlIDEgZMOtZ2l0b1wiLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiTGEgY29udHJhc2XDsWEgcG9yIGxvIG1lbm9zIGRlYmUgdGVuZXIgOCBjYXJhY3RlcmVzLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkX2NvbmZpcm06IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIkVsIGNvbmZpcm1hY2nDs24gZGUgY29udHJhc2XDsWEgZXMgb2JsaWdhdG9yaW9cIixcbiAgICAgICAgICAgIG1pbkxlbmd0aDogXCJFbCB0YW1hw7FvIG3DrW5pbW8gZGUgbGEgY29uZmlybWFjacOzbiBkZSBjb250cmFzZcOxYSBlcyBkZSAxIGTDrWdpdG9zXCIsXG4gICAgICAgICAgICBwYXNzd29yZDogXCJMYSBjb250cmFzZcOxYSBwb3IgbG8gbWVub3MgZGViZSB0ZW5lciA4IGNhcmFjdGVyZXMuXCJcblxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICAgcGFzc3dvcmQ6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoOCksQ3VzdG9tVmFsaWRhdG9ycy5wYXNzd29yZF1dLFxuICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybTogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KV0sQ3VzdG9tVmFsaWRhdG9ycy5wYXNzd29yZF1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub25UYXAoJ2xhYmVsMScpO1xuICAgIH1cbiAgICB2YWxpZGFyUGFzc3dvcmQoKXtcbiAgICAgICAgbGV0IHVzciA9IHRoaXMuZm9ybS52YWx1ZTtcbiAgICAgICAgdGhpcy52YWxpZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmKHVzci5wYXNzd29yZCA9PSB1c3IucGFzc3dvcmRfY29uZmlybSAmJiB1c3IucGFzc3dvcmQubGVuZ3RoID49OCAmJiB1c3IucGFzc3dvcmRfY29uZmlybS5sZW5ndGg+PTgpe1xuICAgICAgICAgICAgdGhpcy52YWxpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWQ7XG5cbiAgICB9XG4gICAgcHVibGljIG9uVGFwKGxibCkge1xuICAgICAgICB2YXIgbGFiZWw6IExhYmVsID0gPExhYmVsPiB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQobGJsKTtcbiAgICAgICAgbGFiZWwuYW5pbWF0ZSh7XG4gICAgICAgICAgICB0cmFuc2xhdGU6IHt4OiAwLCB5OiAtMTV9LFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllcigwLjEsIDAuMSwgMC4xLCAxKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVjdXBlcmFyKCkge1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgfVxuXG4gICAgY2VycmFyKCkge1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKG51bGwpO1xuICAgIH1cbn1cbiJdfQ==
"use strict";
var core_1 = require('@angular/core');
var db_service_1 = require("./db.service");
var user_model_1 = require("./user.model");
var cliente_model_1 = require("./cliente.model");
var tipos_medio_model_1 = require("./tipos_medio.model");
var clientes_medios_model_1 = require("./clientes_medios.model");
var venta_model_1 = require("./venta.model");
var DbModule = (function () {
    function DbModule() {
    }
    DbModule = __decorate([
        core_1.NgModule({
            imports: [],
            providers: [db_service_1.DbService, user_model_1.UserModel, cliente_model_1.ClienteModel, tipos_medio_model_1.TiposMedioModel, clientes_medios_model_1.ClientesMediosModel, venta_model_1.VentaModel],
            declarations: []
        }), 
        __metadata('design:paramtypes', [])
    ], DbModule);
    return DbModule;
}());
exports.DbModule = DbModule;

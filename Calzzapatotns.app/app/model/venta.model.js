"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var db_service_1 = require("./db.service");
var VentaModel = (function () {
    function VentaModel(db) {
        this.db = db;
    }
    VentaModel.prototype.insert = function (venta) {
        this.db.getDatabase().execSQL("INSERT INTO ventas (id,codigo,fecha_asignacion,persona_autoriza,fecha_compra,lugar_compra,pago_quincenal) VALUES(?,?,?,?,?,?,?)", [venta.id, venta.cliente, venta.fecha_asignacion, venta.persona_autoriza, venta.fecha_compra, venta.lugar_compra, venta.pago_quincenal]);
    };
    VentaModel.prototype.fetch = function () {
        return this.db.getDatabase().get("SELECT * FROM ventas");
    };
    VentaModel.prototype.truncate = function () {
        this.db.getDatabase().execSQL("DELETE FROM ventas");
    };
    VentaModel = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [db_service_1.DbService])
    ], VentaModel);
    return VentaModel;
}());
exports.VentaModel = VentaModel;

"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var db_service_1 = require("./db.service");
var ClientesMediosModel = (function () {
    function ClientesMediosModel(db) {
        this.db = db;
    }
    ClientesMediosModel.prototype.insert = function (clientes_medios) {
        for (var _i = 0, clientes_medios_1 = clientes_medios; _i < clientes_medios_1.length; _i++) {
            var cliente_medio = clientes_medios_1[_i];
            this.db.getDatabase().execSQL("INSERT INTO clientes_medios (id,cliente_id,cliente_codigo,tipomedio_id,referencia,notas,estado) VALUES(?,?,?,?,?,?,?)", [cliente_medio.id, cliente_medio.cliente_id, cliente_medio.cliente_codigo, cliente_medio.tipomedio_id, cliente_medio.referencia, cliente_medio.notas, cliente_medio.estado]);
        }
    };
    ClientesMediosModel.prototype.fetch = function () {
        return this.db.getDatabase().all("SELECT clientes_medios.*,tipos_medio.nombre AS medio FROM clientes_medios INNER JOIN tipos_medio ON clientes_medios.tipomedio_id = tipos_medio.id");
    };
    ClientesMediosModel.prototype.truncate = function () {
        this.db.getDatabase().execSQL("DELETE FROM clientes_medios");
    };
    ClientesMediosModel = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [db_service_1.DbService])
    ], ClientesMediosModel);
    return ClientesMediosModel;
}());
exports.ClientesMediosModel = ClientesMediosModel;

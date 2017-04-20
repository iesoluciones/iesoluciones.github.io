"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var db_service_1 = require("./db.service");
var ClienteModel = (function () {
    function ClienteModel(db) {
        this.db = db;
    }
    ClienteModel.prototype.insert = function (cliente) {
        this.db.getDatabase().execSQL("INSERT INTO cliente (id,codigo,paterno,materno,nombre,rfc,plaza_id,tipocredito_id,cp,asentamiento_id,latitude,longitude) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)", [cliente.id, cliente.codigo, cliente.paterno, cliente.materno, cliente.nombre, cliente.rfc, cliente.plaza_id, cliente.tipocredito_id, cliente.cp, cliente.asentamiento_id, cliente.latitude, cliente.longitude]);
    };
    ClienteModel.prototype.fetch = function () {
        return this.db.getDatabase().get("SELECT * FROM cliente");
    };
    ClienteModel.prototype.truncate = function () {
        this.db.getDatabase().execSQL("DELETE FROM cliente");
    };
    ClienteModel.prototype.geolocalizacion = function (codigo_cliente, position) {
        console.log("Insert geolocalizacion model " + codigo_cliente + " => ", JSON.stringify(position));
        this.db.getDatabase().get("UPDATE cliente SET latitude=" + position.latitude + ",longitude=" + position.longitude + " WHERE codigo=" + codigo_cliente);
    };
    ClienteModel = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [db_service_1.DbService])
    ], ClienteModel);
    return ClienteModel;
}());
exports.ClienteModel = ClienteModel;

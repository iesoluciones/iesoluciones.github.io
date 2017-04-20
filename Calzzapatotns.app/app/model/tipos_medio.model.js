"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var db_service_1 = require("./db.service");
var TiposMedioModel = (function () {
    function TiposMedioModel(db) {
        this.db = db;
    }
    TiposMedioModel.prototype.insert = function (medios) {
        for (var _i = 0, medios_1 = medios; _i < medios_1.length; _i++) {
            var medio = medios_1[_i];
            this.db.getDatabase().execSQL("INSERT INTO tipos_medio (id,nombre) VALUES(?,?)", [medio.id, medio.nombre]);
        }
    };
    TiposMedioModel.prototype.fetch = function () {
        return this.db.getDatabase().get("SELECT * FROM tipos_medio");
    };
    TiposMedioModel.prototype.truncate = function () {
        this.db.getDatabase().execSQL("DELETE FROM tipos_medio");
    };
    TiposMedioModel = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [db_service_1.DbService])
    ], TiposMedioModel);
    return TiposMedioModel;
}());
exports.TiposMedioModel = TiposMedioModel;

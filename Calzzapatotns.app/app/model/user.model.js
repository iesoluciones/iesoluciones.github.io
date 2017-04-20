"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var db_service_1 = require("./db.service");
var UserModel = (function () {
    function UserModel(db) {
        this.db = db;
    }
    UserModel.prototype.insert = function (user) {
        this.db.getDatabase().execSQL("INSERT INTO user (id,email,password,first_name,last_name,cliente_id,created_at,updated_at,solicitar) VALUES(?,?,?,?,?,?,?,?,?)", [user.id, user.email, user.password, user.first_name, user.last_name, user.cliente_id, user.created_at, user.updated_at, user.solicitar]);
    };
    UserModel.prototype.fetch = function () {
        return this.db.getDatabase().get("SELECT * FROM user");
    };
    UserModel.prototype.truncate = function () {
        this.db.getDatabase().execSQL("DELETE FROM user");
    };
    UserModel.prototype.cambiarSolicitud = function () {
        this.db.getDatabase().get("UPDATE user SET solicitar=0");
    };
    UserModel = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [db_service_1.DbService])
    ], UserModel);
    return UserModel;
}());
exports.UserModel = UserModel;

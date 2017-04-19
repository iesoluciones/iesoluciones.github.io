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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwb3NfbWVkaW8ubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aXBvc19tZWRpby5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLFFBQU8sc0JBQXNCLENBQUMsQ0FBQTtBQUM5QixRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsMkJBQXdCLGNBQWMsQ0FBQyxDQUFBO0FBR3ZDO0lBR0kseUJBQW9CLEVBQWE7UUFBYixPQUFFLEdBQUYsRUFBRSxDQUFXO0lBQ2pDLENBQUM7SUFFTSxnQ0FBTSxHQUFiLFVBQWMsTUFBVztRQUNyQixHQUFHLENBQUMsQ0FBYyxVQUFNLEVBQU4saUJBQU0sRUFBTixvQkFBTSxFQUFOLElBQU0sQ0FBQztZQUFwQixJQUFJLEtBQUssZUFBQTtZQUNWLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLGlEQUFpRCxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUM5RztJQUNMLENBQUM7SUFFTSwrQkFBSyxHQUFaO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLGtDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFuQkw7UUFBQyxpQkFBVSxFQUFFOzt1QkFBQTtJQXNCYixzQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksdUJBQWUsa0JBcUIzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHtEYlNlcnZpY2V9IGZyb20gXCIuL2RiLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRpcG9zTWVkaW9Nb2RlbCB7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGIgOkRiU2VydmljZSApIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5zZXJ0KG1lZGlvczogYW55KSB7XG4gICAgICAgIGZvciAobGV0IG1lZGlvIG9mIG1lZGlvcykge1xuICAgICAgICAgICAgdGhpcy5kYi5nZXREYXRhYmFzZSgpLmV4ZWNTUUwoXCJJTlNFUlQgSU5UTyB0aXBvc19tZWRpbyAoaWQsbm9tYnJlKSBWQUxVRVMoPyw/KVwiLCBbbWVkaW8uaWQsIG1lZGlvLm5vbWJyZV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGZldGNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYi5nZXREYXRhYmFzZSgpLmdldChcIlNFTEVDVCAqIEZST00gdGlwb3NfbWVkaW9cIik7XG4gICAgfVxuXG4gICAgcHVibGljIHRydW5jYXRlKCl7XG4gICAgICAgIHRoaXMuZGIuZ2V0RGF0YWJhc2UoKS5leGVjU1FMKFwiREVMRVRFIEZST00gdGlwb3NfbWVkaW9cIik7XG4gICAgfVxuXG5cbn0iXX0=
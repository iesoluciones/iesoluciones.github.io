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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50ZXNfbWVkaW9zLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xpZW50ZXNfbWVkaW9zLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzlCLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQiwyQkFBd0IsY0FBYyxDQUFDLENBQUE7QUFHdkM7SUFHSSw2QkFBb0IsRUFBYTtRQUFiLE9BQUUsR0FBRixFQUFFLENBQVc7SUFDakMsQ0FBQztJQUVNLG9DQUFNLEdBQWIsVUFBYyxlQUFvQjtRQUM5QixHQUFHLENBQUMsQ0FBc0IsVUFBZSxFQUFmLG1DQUFlLEVBQWYsNkJBQWUsRUFBZixJQUFlLENBQUM7WUFBckMsSUFBSSxhQUFhLHdCQUFBO1lBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLHVIQUF1SCxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDdlU7SUFDTCxDQUFDO0lBRU0sbUNBQUssR0FBWjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtSkFBbUosQ0FBQyxDQUFDO0lBQzFMLENBQUM7SUFFTSxzQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBbkJMO1FBQUMsaUJBQVUsRUFBRTs7MkJBQUE7SUFvQmIsMEJBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbkJZLDJCQUFtQixzQkFtQi9CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQge0RiU2VydmljZX0gZnJvbSBcIi4vZGIuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xpZW50ZXNNZWRpb3NNb2RlbCB7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGI6IERiU2VydmljZSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnNlcnQoY2xpZW50ZXNfbWVkaW9zOiBhbnkpIHtcbiAgICAgICAgZm9yIChsZXQgY2xpZW50ZV9tZWRpbyBvZiBjbGllbnRlc19tZWRpb3MpIHtcbiAgICAgICAgICAgIHRoaXMuZGIuZ2V0RGF0YWJhc2UoKS5leGVjU1FMKFwiSU5TRVJUIElOVE8gY2xpZW50ZXNfbWVkaW9zIChpZCxjbGllbnRlX2lkLGNsaWVudGVfY29kaWdvLHRpcG9tZWRpb19pZCxyZWZlcmVuY2lhLG5vdGFzLGVzdGFkbykgVkFMVUVTKD8sPyw/LD8sPyw/LD8pXCIsIFtjbGllbnRlX21lZGlvLmlkLCBjbGllbnRlX21lZGlvLmNsaWVudGVfaWQsIGNsaWVudGVfbWVkaW8uY2xpZW50ZV9jb2RpZ28sIGNsaWVudGVfbWVkaW8udGlwb21lZGlvX2lkLCBjbGllbnRlX21lZGlvLnJlZmVyZW5jaWEsIGNsaWVudGVfbWVkaW8ubm90YXMsIGNsaWVudGVfbWVkaW8uZXN0YWRvXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZmV0Y2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRiLmdldERhdGFiYXNlKCkuYWxsKFwiU0VMRUNUIGNsaWVudGVzX21lZGlvcy4qLHRpcG9zX21lZGlvLm5vbWJyZSBBUyBtZWRpbyBGUk9NIGNsaWVudGVzX21lZGlvcyBJTk5FUiBKT0lOIHRpcG9zX21lZGlvIE9OIGNsaWVudGVzX21lZGlvcy50aXBvbWVkaW9faWQgPSB0aXBvc19tZWRpby5pZFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJ1bmNhdGUoKSB7XG4gICAgICAgIHRoaXMuZGIuZ2V0RGF0YWJhc2UoKS5leGVjU1FMKFwiREVMRVRFIEZST00gY2xpZW50ZXNfbWVkaW9zXCIpO1xuICAgIH1cbn0iXX0=
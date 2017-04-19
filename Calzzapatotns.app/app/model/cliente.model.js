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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50ZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsaWVudGUubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6QyxRQUFPLHNCQUFzQixDQUFDLENBQUE7QUFDOUIsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLDJCQUF3QixjQUFjLENBQUMsQ0FBQTtBQUd2QztJQUdJLHNCQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztJQUNqQyxDQUFDO0lBRU0sNkJBQU0sR0FBYixVQUFjLE9BQVk7UUFDdEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsMEpBQTBKLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBQyxPQUFPLENBQUMsUUFBUSxFQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUMsT0FBTyxDQUFDLEVBQUUsRUFBQyxPQUFPLENBQUMsZUFBZSxFQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDelksQ0FBQztJQUVNLDRCQUFLLEdBQVo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sK0JBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNNLHNDQUFlLEdBQXRCLFVBQXVCLGNBQWMsRUFBQyxRQUFRO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEdBQUMsY0FBYyxHQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUMsUUFBUSxDQUFDLFFBQVEsR0FBQyxhQUFhLEdBQUMsUUFBUSxDQUFDLFNBQVMsR0FBQyxnQkFBZ0IsR0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqSixDQUFDO0lBckJMO1FBQUMsaUJBQVUsRUFBRTs7b0JBQUE7SUF3QmIsbUJBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLG9CQUFZLGVBdUJ4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHtEYlNlcnZpY2V9IGZyb20gXCIuL2RiLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsaWVudGVNb2RlbCB7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGIgOkRiU2VydmljZSApIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5zZXJ0KGNsaWVudGU6IGFueSkge1xuICAgICAgICB0aGlzLmRiLmdldERhdGFiYXNlKCkuZXhlY1NRTChcIklOU0VSVCBJTlRPIGNsaWVudGUgKGlkLGNvZGlnbyxwYXRlcm5vLG1hdGVybm8sbm9tYnJlLHJmYyxwbGF6YV9pZCx0aXBvY3JlZGl0b19pZCxjcCxhc2VudGFtaWVudG9faWQsbGF0aXR1ZGUsbG9uZ2l0dWRlKSBWQUxVRVMoPyw/LD8sPyw/LD8sPyw/LD8sPyw/LD8pXCIsIFtjbGllbnRlLmlkLCBjbGllbnRlLmNvZGlnbywgY2xpZW50ZS5wYXRlcm5vLCBjbGllbnRlLm1hdGVybm8sIGNsaWVudGUubm9tYnJlLCBjbGllbnRlLnJmYyxjbGllbnRlLnBsYXphX2lkLGNsaWVudGUudGlwb2NyZWRpdG9faWQsY2xpZW50ZS5jcCxjbGllbnRlLmFzZW50YW1pZW50b19pZCxjbGllbnRlLmxhdGl0dWRlLGNsaWVudGUubG9uZ2l0dWRlXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZldGNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYi5nZXREYXRhYmFzZSgpLmdldChcIlNFTEVDVCAqIEZST00gY2xpZW50ZVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJ1bmNhdGUoKXtcbiAgICAgICAgdGhpcy5kYi5nZXREYXRhYmFzZSgpLmV4ZWNTUUwoXCJERUxFVEUgRlJPTSBjbGllbnRlXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2VvbG9jYWxpemFjaW9uKGNvZGlnb19jbGllbnRlLHBvc2l0aW9uKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJJbnNlcnQgZ2VvbG9jYWxpemFjaW9uIG1vZGVsIFwiK2NvZGlnb19jbGllbnRlK1wiID0+IFwiLEpTT04uc3RyaW5naWZ5KHBvc2l0aW9uKSk7XG4gICAgICAgIHRoaXMuZGIuZ2V0RGF0YWJhc2UoKS5nZXQoXCJVUERBVEUgY2xpZW50ZSBTRVQgbGF0aXR1ZGU9XCIrcG9zaXRpb24ubGF0aXR1ZGUrXCIsbG9uZ2l0dWRlPVwiK3Bvc2l0aW9uLmxvbmdpdHVkZStcIiBXSEVSRSBjb2RpZ289XCIrY29kaWdvX2NsaWVudGUpO1xuICAgIH1cblxuXG59Il19
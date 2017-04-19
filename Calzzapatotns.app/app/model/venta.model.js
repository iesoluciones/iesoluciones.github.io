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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGEubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW50YS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLFFBQU8sc0JBQXNCLENBQUMsQ0FBQTtBQUM5QixRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsMkJBQXdCLGNBQWMsQ0FBQyxDQUFBO0FBR3ZDO0lBRUksb0JBQW9CLEVBQWE7UUFBYixPQUFFLEdBQUYsRUFBRSxDQUFXO0lBQ2pDLENBQUM7SUFFTSwyQkFBTSxHQUFiLFVBQWMsS0FBVTtRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxpSUFBaUksRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM5UyxDQUFDO0lBRU0sMEJBQUssR0FBWjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSw2QkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBaEJMO1FBQUMsaUJBQVUsRUFBRTs7a0JBQUE7SUFrQmIsaUJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLGtCQUFVLGFBaUJ0QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHtEYlNlcnZpY2V9IGZyb20gXCIuL2RiLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlbnRhTW9kZWwge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYiA6RGJTZXJ2aWNlICkge1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnNlcnQodmVudGE6IGFueSkge1xuICAgICAgICB0aGlzLmRiLmdldERhdGFiYXNlKCkuZXhlY1NRTChcIklOU0VSVCBJTlRPIHZlbnRhcyAoaWQsY29kaWdvLGZlY2hhX2FzaWduYWNpb24scGVyc29uYV9hdXRvcml6YSxmZWNoYV9jb21wcmEsbHVnYXJfY29tcHJhLHBhZ29fcXVpbmNlbmFsKSBWQUxVRVMoPyw/LD8sPyw/LD8sPylcIiwgW3ZlbnRhLmlkLCB2ZW50YS5jbGllbnRlLCB2ZW50YS5mZWNoYV9hc2lnbmFjaW9uLCB2ZW50YS5wZXJzb25hX2F1dG9yaXphLCB2ZW50YS5mZWNoYV9jb21wcmEsIHZlbnRhLmx1Z2FyX2NvbXByYSwgdmVudGEucGFnb19xdWluY2VuYWxdKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmV0Y2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRiLmdldERhdGFiYXNlKCkuZ2V0KFwiU0VMRUNUICogRlJPTSB2ZW50YXNcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHRydW5jYXRlKCl7XG4gICAgICAgIHRoaXMuZGIuZ2V0RGF0YWJhc2UoKS5leGVjU1FMKFwiREVMRVRFIEZST00gdmVudGFzXCIpO1xuICAgIH1cblxufSJdfQ==
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsMkJBQXdCLGNBQWMsQ0FBQyxDQUFBO0FBQ3ZDLDJCQUF3QixjQUFjLENBQUMsQ0FBQTtBQUN2Qyw4QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxrQ0FBOEIscUJBQXFCLENBQUMsQ0FBQTtBQUNwRCxzQ0FBa0MseUJBQXlCLENBQUMsQ0FBQTtBQUM1RCw0QkFBeUIsZUFBZSxDQUFDLENBQUE7QUFPekM7SUFBQTtJQUF3QixDQUFDO0lBTHpCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLEVBQUU7WUFDWCxTQUFTLEVBQUcsQ0FBQyxzQkFBUyxFQUFDLHNCQUFTLEVBQUMsNEJBQVksRUFBQyxtQ0FBZSxFQUFDLDJDQUFtQixFQUFDLHdCQUFVLENBQUM7WUFDN0YsWUFBWSxFQUFFLEVBQUU7U0FDakIsQ0FBQzs7Z0JBQUE7SUFDc0IsZUFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixnQkFBUSxXQUFJLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYlNlcnZpY2V9IGZyb20gXCIuL2RiLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlck1vZGVsfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XG5pbXBvcnQge0NsaWVudGVNb2RlbH0gZnJvbSBcIi4vY2xpZW50ZS5tb2RlbFwiO1xuaW1wb3J0IHtUaXBvc01lZGlvTW9kZWx9IGZyb20gXCIuL3RpcG9zX21lZGlvLm1vZGVsXCI7XG5pbXBvcnQge0NsaWVudGVzTWVkaW9zTW9kZWx9IGZyb20gXCIuL2NsaWVudGVzX21lZGlvcy5tb2RlbFwiO1xuaW1wb3J0IHtWZW50YU1vZGVsfSBmcm9tIFwiLi92ZW50YS5tb2RlbFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgcHJvdmlkZXJzIDogW0RiU2VydmljZSxVc2VyTW9kZWwsQ2xpZW50ZU1vZGVsLFRpcG9zTWVkaW9Nb2RlbCxDbGllbnRlc01lZGlvc01vZGVsLFZlbnRhTW9kZWxdLFxuICBkZWNsYXJhdGlvbnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIERiTW9kdWxlIHsgfVxuIl19
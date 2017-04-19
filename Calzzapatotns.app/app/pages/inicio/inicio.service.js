"use strict";
var http_service_1 = require("../../custom-http/http-service");
var core_1 = require("@angular/core");
/**
 * Created by iedeveloper on 16/02/17.
 */
var InicioService = (function () {
    function InicioService(http) {
        this.http = http;
    }
    InicioService.prototype.getClienteInfo = function (codigoCliente) {
        console.log("Entra ela peticion tempranera");
        return this.http.get("saldosDetalleSoap/" + codigoCliente).map(function (response) { return response.json(); });
    };
    InicioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], InicioService);
    return InicioService;
}());
exports.InicioService = InicioService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pY2lvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmljaW8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFDM0QscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDOztHQUVHO0FBRUg7SUFFSSx1QkFBb0IsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtJQUNyQyxDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLGFBQWE7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQVRMO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUFZYixvQkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFkscUJBQWEsZ0JBV3pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vY3VzdG9tLWh0dHAvaHR0cC1zZXJ2aWNlXCI7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG4vKipcbiAqIENyZWF0ZWQgYnkgaWVkZXZlbG9wZXIgb24gMTYvMDIvMTcuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbmljaW9TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBnZXRDbGllbnRlSW5mbyhjb2RpZ29DbGllbnRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRW50cmEgZWxhIHBldGljaW9uIHRlbXByYW5lcmFcIik7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwic2FsZG9zRGV0YWxsZVNvYXAvXCIrY29kaWdvQ2xpZW50ZSkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfVxuXG4gICAgLy9WZXIgcXVlIGVzIHNpbmNyb25pemFjaW9uXG59Il19
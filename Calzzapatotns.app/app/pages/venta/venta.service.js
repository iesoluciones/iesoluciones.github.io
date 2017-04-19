"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var http_service_1 = require("../../custom-http/http-service");
var VentaService = (function () {
    function VentaService(http) {
        this.http = http;
    }
    VentaService.prototype.index = function () {
        return this.http.get("ventas").map(function (response) { return response.json(); });
    };
    VentaService.prototype.save = function (venta) {
        return this.http.post('ventas', venta).map(function (response) { return response.json(); });
    };
    VentaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], VentaService);
    return VentaService;
}());
exports.VentaService = VentaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbnRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxRQUFPLHNCQUFzQixDQUFDLENBQUE7QUFDOUIsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLDZCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBSzNEO0lBRUksc0JBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFDckMsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSwyQkFBSSxHQUFYLFVBQVksS0FBWTtRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUU1RSxDQUFDO0lBYkw7UUFBQyxpQkFBVSxFQUFFOztvQkFBQTtJQWNiLG1CQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxvQkFBWSxlQWF4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHtIdHRwU2VydmljZX0gZnJvbSBcIi4uLy4uL2N1c3RvbS1odHRwL2h0dHAtc2VydmljZVwiO1xuaW1wb3J0IHtWZW50YX0gZnJvbSBcIi4vdmVudGEuY2xhc3NcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlbnRhU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgaW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwidmVudGFzXCIpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzYXZlKHZlbnRhOiBWZW50YSk6IE9ic2VydmFibGU8VmVudGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCd2ZW50YXMnLCB2ZW50YSkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbiAgICB9XG59XG4iXX0=
"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var http_service_1 = require("../../custom-http/http-service");
var MicuentaService = (function () {
    function MicuentaService(http) {
        this.http = http;
    }
    MicuentaService.prototype.geolocalizacion = function (codigo_cliente, dato) {
        return this.http.post("clientes/" + codigo_cliente + "/geolocalizacion", dato).map(function (response) { return response.json(); });
    };
    MicuentaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], MicuentaService);
    return MicuentaService;
}());
exports.MicuentaService = MicuentaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljdWVudGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1pY3VlbnRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxRQUFPLHNCQUFzQixDQUFDLENBQUE7QUFDOUIsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLDZCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRzNEO0lBRUkseUJBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFDckMsQ0FBQztJQUVELHlDQUFlLEdBQWYsVUFBZ0IsY0FBYyxFQUFDLElBQUk7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBQyxjQUFjLEdBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQ2hILENBQUM7SUFSTDtRQUFDLGlCQUFVLEVBQUU7O3VCQUFBO0lBU2Isc0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLHVCQUFlLGtCQVEzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHtIdHRwU2VydmljZX0gZnJvbSBcIi4uLy4uL2N1c3RvbS1odHRwL2h0dHAtc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWljdWVudGFTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBnZW9sb2NhbGl6YWNpb24oY29kaWdvX2NsaWVudGUsZGF0bykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXCJjbGllbnRlcy9cIitjb2RpZ29fY2xpZW50ZStcIi9nZW9sb2NhbGl6YWNpb25cIiwgZGF0bykubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfVxufVxuIl19
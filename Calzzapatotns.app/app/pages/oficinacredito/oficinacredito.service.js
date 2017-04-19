"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var http_service_1 = require("../../custom-http/http-service");
var OficinacreditoService = (function () {
    function OficinacreditoService(http) {
        this.http = http;
    }
    OficinacreditoService.prototype.getTiendas = function (datos) {
        return this.http.post("oficinasCredito", datos).map(function (response) { return response.json(); });
    };
    OficinacreditoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], OficinacreditoService);
    return OficinacreditoService;
}());
exports.OficinacreditoService = OficinacreditoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZpY2luYWNyZWRpdG8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9maWNpbmFjcmVkaXRvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxRQUFPLHNCQUFzQixDQUFDLENBQUE7QUFDOUIsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLDZCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRzNEO0lBRUksK0JBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFDckMsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBUkw7UUFBQyxpQkFBVSxFQUFFOzs2QkFBQTtJQVNiLDRCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSw2QkFBcUIsd0JBUWpDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vY3VzdG9tLWh0dHAvaHR0cC1zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPZmljaW5hY3JlZGl0b1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwU2VydmljZSkge1xuICAgIH1cblxuICAgIGdldFRpZW5kYXMoZGF0b3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFwib2ZpY2luYXNDcmVkaXRvXCIsZGF0b3MpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIH1cbn1cbiJdfQ==
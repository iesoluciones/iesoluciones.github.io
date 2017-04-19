"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var http_service_1 = require("../../custom-http/http-service");
var ValeService = (function () {
    function ValeService(http) {
        this.http = http;
    }
    ValeService.prototype.index = function (cliente_id) {
        return this.http.get("clientes/" + cliente_id + "/vales").map(function (response) { return response.json(); });
    };
    ValeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], ValeService);
    return ValeService;
}());
exports.ValeService = ValeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzlCLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQiw2QkFBMEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUczRDtJQUVJLHFCQUFvQixJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO0lBQ3JDLENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sVUFBVTtRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUMsVUFBVSxHQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBUkw7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQVNiLGtCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxtQkFBVyxjQVF2QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHtIdHRwU2VydmljZX0gZnJvbSBcIi4uLy4uL2N1c3RvbS1odHRwL2h0dHAtc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFsZVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwU2VydmljZSkge1xuICAgIH1cblxuICAgIGluZGV4KGNsaWVudGVfaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJjbGllbnRlcy9cIitjbGllbnRlX2lkK1wiL3ZhbGVzXCIpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIH1cbn1cbiJdfQ==
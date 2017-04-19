"use strict";
var core_1 = require("@angular/core");
var http_service_1 = require("../../custom-http/http-service");
/**
 * Created by iedeveloper on 23/03/17.
 */
var CorteService = (function () {
    function CorteService(http) {
        this.http = http;
    }
    CorteService.prototype.getSaldos = function (codigoCliente) {
        return this.http.get("saldosDetalleSoap/" + codigoCliente).map(function (response) { return response.json(); });
    };
    CorteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], CorteService);
    return CorteService;
}());
exports.CorteService = CorteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ydGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcnRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyw2QkFBMEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUMzRDs7R0FFRztBQUdIO0lBRUksc0JBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFDckMsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxhQUFhO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQVJMO1FBQUMsaUJBQVUsRUFBRTs7b0JBQUE7SUFTYixtQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksb0JBQVksZUFReEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SHR0cFNlcnZpY2V9IGZyb20gXCIuLi8uLi9jdXN0b20taHR0cC9odHRwLXNlcnZpY2VcIjtcbi8qKlxuICogQ3JlYXRlZCBieSBpZWRldmVsb3BlciBvbiAyMy8wMy8xNy5cbiAqL1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29ydGVTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBnZXRTYWxkb3MoY29kaWdvQ2xpZW50ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcInNhbGRvc0RldGFsbGVTb2FwL1wiK2NvZGlnb0NsaWVudGUpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIH1cbn1cblxuIl19
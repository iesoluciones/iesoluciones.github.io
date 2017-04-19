"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var http_service_1 = require("../../custom-http/http-service");
var ClienteService = (function () {
    function ClienteService(http) {
        this.http = http;
    }
    ClienteService.prototype.index = function () {
        return this.http.get("subclientes").map(function (response) { return response.json(); });
    };
    ClienteService.prototype.save = function (cliente) {
        return this.http.post('subclientes', cliente).map(function (response) { return response.json(); });
    };
    ClienteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], ClienteService);
    return ClienteService;
}());
exports.ClienteService = ClienteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xpZW50ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzlCLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQiw2QkFBMEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUszRDtJQUVJLHdCQUFvQixJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO0lBQ3JDLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU0sNkJBQUksR0FBWCxVQUFZLE9BQWdCO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBRW5GLENBQUM7SUFiTDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBY2IscUJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLHNCQUFjLGlCQWExQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHtIdHRwU2VydmljZX0gZnJvbSBcIi4uLy4uL2N1c3RvbS1odHRwL2h0dHAtc2VydmljZVwiO1xuaW1wb3J0IHtDbGllbnRlfSBmcm9tIFwiLi9jbGllbnRlLmNsYXNzXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbGllbnRlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgaW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwic3ViY2xpZW50ZXNcIikubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmUoY2xpZW50ZTogQ2xpZW50ZSk6IE9ic2VydmFibGU8Q2xpZW50ZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ3N1YmNsaWVudGVzJywgY2xpZW50ZSkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbiAgICB9XG59XG4iXX0=
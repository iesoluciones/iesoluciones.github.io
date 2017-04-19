"use strict";
var Config = (function () {
    function Config() {
    }
    //static apiUrl = "http://192.168.125.53/calzzapato_cm/public/api/";              /* ??????      */
    //static apiUrl = "http://192.168.0.28/calzzapato_backend/public/api/";           /* ?????       */
    //static apiUrl = "http://192.168.125.160/calzzapato_backend/public/api/";      /* Henry Local */
    //static apiUrl = "http://lab.ie-soluciones.com/calzzapato/v1/api/";               /* Laboratorio */
    Config.apiUrl = "http://192.168.125.244/calzzapato/v1/api/"; /* Nuevo Lab   */
    Config.token = "";
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUFBO0lBU0EsQ0FBQztJQVBDLG1HQUFtRztJQUNuRyxtR0FBbUc7SUFDbkcsaUdBQWlHO0lBQ2pHLG9HQUFvRztJQUMzRixhQUFNLEdBQUcsMkNBQTJDLENBQUMsQ0FBcUIsaUJBQWlCO0lBRTNGLFlBQUssR0FBRyxFQUFFLENBQUM7SUFDdEIsYUFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksY0FBTSxTQVNsQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZyB7XG5cbiAgLy9zdGF0aWMgYXBpVXJsID0gXCJodHRwOi8vMTkyLjE2OC4xMjUuNTMvY2FsenphcGF0b19jbS9wdWJsaWMvYXBpL1wiOyAgICAgICAgICAgICAgLyogPz8/Pz8/ICAgICAgKi9cbiAgLy9zdGF0aWMgYXBpVXJsID0gXCJodHRwOi8vMTkyLjE2OC4wLjI4L2NhbHp6YXBhdG9fYmFja2VuZC9wdWJsaWMvYXBpL1wiOyAgICAgICAgICAgLyogPz8/Pz8gICAgICAgKi9cbiAgLy9zdGF0aWMgYXBpVXJsID0gXCJodHRwOi8vMTkyLjE2OC4xMjUuMTYwL2NhbHp6YXBhdG9fYmFja2VuZC9wdWJsaWMvYXBpL1wiOyAgICAgIC8qIEhlbnJ5IExvY2FsICovXG4gIC8vc3RhdGljIGFwaVVybCA9IFwiaHR0cDovL2xhYi5pZS1zb2x1Y2lvbmVzLmNvbS9jYWx6emFwYXRvL3YxL2FwaS9cIjsgICAgICAgICAgICAgICAvKiBMYWJvcmF0b3JpbyAqL1xuICAgIHN0YXRpYyBhcGlVcmwgPSBcImh0dHA6Ly8xOTIuMTY4LjEyNS4yNDQvY2FsenphcGF0by92MS9hcGkvXCI7ICAgICAgICAgICAgICAgICAgICAgLyogTnVldm8gTGFiICAgKi9cblxuICAgIHN0YXRpYyB0b2tlbiA9IFwiXCI7XG59Il19
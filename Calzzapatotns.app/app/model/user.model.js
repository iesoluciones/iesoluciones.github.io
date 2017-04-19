"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var db_service_1 = require("./db.service");
var UserModel = (function () {
    function UserModel(db) {
        this.db = db;
    }
    UserModel.prototype.insert = function (user) {
        this.db.getDatabase().execSQL("INSERT INTO user (id,email,password,first_name,last_name,cliente_id,created_at,updated_at,solicitar) VALUES(?,?,?,?,?,?,?,?,?)", [user.id, user.email, user.password, user.first_name, user.last_name, user.cliente_id, user.created_at, user.updated_at, user.solicitar]);
    };
    UserModel.prototype.fetch = function () {
        return this.db.getDatabase().get("SELECT * FROM user");
    };
    UserModel.prototype.truncate = function () {
        this.db.getDatabase().execSQL("DELETE FROM user");
    };
    UserModel.prototype.cambiarSolicitud = function () {
        this.db.getDatabase().get("UPDATE user SET solicitar=0");
    };
    UserModel = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [db_service_1.DbService])
    ], UserModel);
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6QyxRQUFPLHNCQUFzQixDQUFDLENBQUE7QUFDOUIsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLDJCQUF3QixjQUFjLENBQUMsQ0FBQTtBQUd2QztJQUdJLG1CQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztJQUNqQyxDQUFDO0lBRU0sMEJBQU0sR0FBYixVQUFjLElBQVM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsZ0lBQWdJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDN1MsQ0FBQztJQUVNLHlCQUFLLEdBQVo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU0sNEJBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLG9DQUFnQixHQUF2QjtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQXJCTDtRQUFDLGlCQUFVLEVBQUU7O2lCQUFBO0lBd0JiLGdCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxpQkFBUyxZQXVCckIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7RGJTZXJ2aWNlfSBmcm9tIFwiLi9kYi5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyTW9kZWwge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRiIDpEYlNlcnZpY2UgKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGluc2VydCh1c2VyOiBhbnkpIHtcbiAgICAgICAgdGhpcy5kYi5nZXREYXRhYmFzZSgpLmV4ZWNTUUwoXCJJTlNFUlQgSU5UTyB1c2VyIChpZCxlbWFpbCxwYXNzd29yZCxmaXJzdF9uYW1lLGxhc3RfbmFtZSxjbGllbnRlX2lkLGNyZWF0ZWRfYXQsdXBkYXRlZF9hdCxzb2xpY2l0YXIpIFZBTFVFUyg/LD8sPyw/LD8sPyw/LD8sPylcIiwgW3VzZXIuaWQsIHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQsIHVzZXIuZmlyc3RfbmFtZSwgdXNlci5sYXN0X25hbWUsIHVzZXIuY2xpZW50ZV9pZCwgdXNlci5jcmVhdGVkX2F0LCB1c2VyLnVwZGF0ZWRfYXQsdXNlci5zb2xpY2l0YXJdKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmV0Y2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRiLmdldERhdGFiYXNlKCkuZ2V0KFwiU0VMRUNUICogRlJPTSB1c2VyXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cnVuY2F0ZSgpe1xuICAgICAgICB0aGlzLmRiLmdldERhdGFiYXNlKCkuZXhlY1NRTChcIkRFTEVURSBGUk9NIHVzZXJcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGNhbWJpYXJTb2xpY2l0dWQoKXtcbiAgICAgICAgdGhpcy5kYi5nZXREYXRhYmFzZSgpLmdldChcIlVQREFURSB1c2VyIFNFVCBzb2xpY2l0YXI9MFwiKTtcbiAgICB9XG5cblxufSJdfQ==
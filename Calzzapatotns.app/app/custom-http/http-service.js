"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var router_1 = require("@angular/router");
var appSettings = require("application-settings");
var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions, router, _url) {
        _super.call(this, backend, defaultOptions);
        this.router = router;
        this._url = _url;
        this.errorEvent = new core_1.EventEmitter(true);
        this.start = new core_1.EventEmitter(true);
        this.stop = new core_1.EventEmitter(true);
        this._timeout = 25000;
    }
    /**
     * Performs any type of http request.
     * @param url
     * @param options
     * @returns {Observable<Response>}
     */
    HttpService.prototype.request = function (url, options) {
        return _super.prototype.request.call(this, url, options);
    };
    /**
     * Performs a request with `get` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.get = function (url, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.get.call(this, this.getFullUrl(url), this.requestOptions(options))
            .timeout(this._timeout, Observable_1.Observable.throw('timeout_exceeded'))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    HttpService.prototype.getLocal = function (url, options) {
        return _super.prototype.get.call(this, url, options);
    };
    /**
     * Performs a request with `post` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.post = function (url, body, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.post.call(this, this.getFullUrl(url), body, this.requestOptions(options))
            .timeout(this._timeout, Observable_1.Observable.throw('timeout_exceeded'))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    HttpService.prototype.login = function (url, body, options) {
        var _this = this;
        this.requestInterceptor();
        console.log(this.getFullUrl(url), JSON.stringify(body));
        return _super.prototype.post.call(this, this.getFullUrl(url), body, options)
            .timeout(this._timeout, Observable_1.Observable.throw('timeout_exceeded'))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    /**
     * Performs a request with `put` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.put = function (url, body, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.put.call(this, this.getFullUrl(url), body, this.requestOptions(options))
            .timeout(this._timeout, Observable_1.Observable.throw('timeout_exceeded'))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    /**
     * Performs a request with `delete` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.delete = function (url, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.delete.call(this, this.getFullUrl(url), this.requestOptions(options))
            .timeout(this._timeout, Observable_1.Observable.throw('timeout_exceeded'))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    /**
     * Request options.
     * @param options
     * @returns {RequestOptionsArgs}
     */
    HttpService.prototype.requestOptions = function (options) {
        if (options == null) {
            options = new http_1.RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new http_1.Headers();
        }
        options.headers.append('Authorization', 'Bearer ' + appSettings.getString("token"));
        options.headers.append('Accept', 'application/json');
        return options;
    };
    /**
     * Request interceptor.
     */
    HttpService.prototype.requestInterceptor = function () {
        this.start.emit();
    };
    /**
     * Response interceptor.
     */
    HttpService.prototype.responseInterceptor = function () {
        this.stop.emit();
    };
    /**
     * Error handler.
     * @param error
     * @param caught
     * @returns {ErrorObservable}
     */
    HttpService.prototype.onCatch = function (error, caught) {
        return Observable_1.Observable.throw(error);
    };
    /**
     * onSubscribeSuccess
     * @param res
     */
    HttpService.prototype.onSubscribeSuccess = function (res) {
        //console.log('onSubscribeSuccess()');
    };
    /**
     * onSubscribeError
     * @param error
     */
    HttpService.prototype.onSubscribeError = function (error) {
        this.errorEvent.emit(error);
    };
    /**
     * onFinally
     */
    HttpService.prototype.onFinally = function () {
        this.responseInterceptor();
    };
    /**
     * Build API url.
     * @param url
     * @returns {string}
     */
    HttpService.prototype.getFullUrl = function (url) {
        return this._url + url;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], HttpService.prototype, "errorEvent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], HttpService.prototype, "start", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], HttpService.prototype, "stop", void 0);
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.XHRBackend, http_1.RequestOptions, router_1.Router, String])
    ], HttpService);
    return HttpService;
}(http_1.Http));
exports.HttpService = HttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBK0MsZUFBZSxDQUFDLENBQUE7QUFDL0QscUJBT08sZUFBZSxDQUFDLENBQUE7QUFDdkIsMkJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFDM0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQix1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUdsRDtJQUFpQywrQkFBSTtJQVVqQyxxQkFBWSxPQUFtQixFQUNuQixjQUE4QixFQUN0QixNQUFjLEVBQ2QsSUFBWTtRQUU1QixrQkFBTSxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFIZixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBUTtRQVZ0QixlQUFVLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxVQUFLLEdBQXVCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxTQUFJLEdBQXVCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwRCxhQUFRLEdBQVksS0FBSyxDQUFDO0lBVS9CLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDZCQUFPLEdBQVAsVUFBUSxHQUFxQixFQUFFLE9BQTRCO1FBQ3ZELE1BQU0sQ0FBQyxnQkFBSyxDQUFDLE9BQU8sWUFBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gseUJBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxPQUE0QjtRQUE3QyxpQkFhQztRQVpHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxnQkFBSyxDQUFDLEdBQUcsWUFBQyxJQUFJLENBQUMs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LHNDQUFnQixHQUF4QixVQUF5QixLQUFVO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7T0FFRztJQUNLLCtCQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxnQ0FBVSxHQUFsQixVQUFtQixHQUFXO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUMzQixDQUFDO0lBL01EO1FBQUMsYUFBTSxFQUFFOzttREFBQTtJQUNaO1FBQUMsYUFBTSxFQUFFOzs4Q0FBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOzs2Q0FBQTtJQU5WO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUFxTmIsa0JBQUM7QUFBRCxDQUFDLEFBcE5ELENBQWlDLFdBQUksR0FvTnBDO0FBcE5ZLG1CQUFXLGNBb052QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRIdHRwLFxuXHRYSFJCYWNrZW5kLFxuXHRSZXF1ZXN0T3B0aW9ucyxcblx0UmVxdWVzdE9wdGlvbnNBcmdzLFxuXHRSZXNwb25zZSxcblx0SGVhZGVycywgUmVxdWVzdFxufSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xudmFyIGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2UgZXh0ZW5kcyBIdHRwIHtcblxuXG4gICAgQE91dHB1dCgpIGVycm9yRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcblx0QE91dHB1dCgpIHN0YXJ0IDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuXHRAT3V0cHV0KCkgc3RvcCA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcblxuXHRwcml2YXRlIF90aW1lb3V0IDogbnVtYmVyID0gMjUwMDA7XG5cblxuICAgIGNvbnN0cnVjdG9yKGJhY2tlbmQ6IFhIUkJhY2tlbmQsXG4gICAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfdXJsOiBzdHJpbmcpIHtcblxuICAgICAgICBzdXBlcihiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucyk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhbnkgdHlwZSBvZiBodHRwIHJlcXVlc3QuXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8UmVzcG9uc2U+fVxuICAgICAqL1xuICAgIHJlcXVlc3QodXJsOiBzdHJpbmcgfCBSZXF1ZXN0LCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gc3VwZXIucmVxdWVzdCh1cmwsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBnZXRgIGh0dHAgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPD59XG4gICAgICovXG4gICAgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SW50ZXJjZXB0b3IoKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldCh0aGlzLmdldEZ1bGxVcmwodXJsKSwgdGhpcy5yZXF1ZXN0T3B0aW9ucyhvcHRpb25zKSlcblx0XHRcdC50aW1lb3V0KHRoaXMuX3RpbWVvdXQsIE9ic2VydmFibGUudGhyb3coJ3RpbWVvdXRfZXhjZWVkZWQnKSApXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5vbkNhdGNoKVxuICAgICAgICAgICAgLmRvKChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblN1YnNjcmliZVN1Y2Nlc3MocmVzKTtcbiAgICAgICAgICAgIH0sIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblN1YnNjcmliZUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkZpbmFsbHkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldExvY2FsKHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldCh1cmwsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBwb3N0YCBodHRwIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIGJvZHlcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPD59XG4gICAgICovXG4gICAgcG9zdCh1cmw6IHN0cmluZywgYm9keTogYW55LCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SW50ZXJjZXB0b3IoKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnBvc3QodGhpcy5nZXRGdWxsVXJsKHVybCksIGJvZHksIHRoaXMucmVxdWVzdE9wdGlvbnMob3B0aW9ucykpXG5cdFx0XHQudGltZW91dCh0aGlzLl90aW1lb3V0LCBPYnNlcnZhYmxlLnRocm93KCd0aW1lb3V0X2V4Y2VlZGVkJykgKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMub25DYXRjaClcbiAgICAgICAgICAgIC5kbygocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25TdWJzY3JpYmVTdWNjZXNzKHJlcyk7XG4gICAgICAgICAgICB9LCAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25TdWJzY3JpYmVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25GaW5hbGx5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2dpbih1cmw6IHN0cmluZywgYm9keTogYW55LCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgICAgdGhpcy5yZXF1ZXN0SW50ZXJjZXB0b3IoKTtcbiAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXRGdWxsVXJsKHVybCksSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICAgICAgICAgICByZXR1cm4gc3VwZXIucG9zdCh0aGlzLmdldEZ1bGxVcmwodXJsKSwgYm9keSwgb3B0aW9ucylcbiAgIFx0XHRcdC50aW1lb3V0KHRoaXMuX3RpbWVvdXQsIE9ic2VydmFibGUudGhyb3coJ3RpbWVvdXRfZXhjZWVkZWQnKSApXG4gICAgICAgICAgICAgICAuY2F0Y2godGhpcy5vbkNhdGNoKVxuICAgICAgICAgICAgICAgLmRvKChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5vblN1YnNjcmliZVN1Y2Nlc3MocmVzKTtcbiAgICAgICAgICAgICAgIH0sIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5vblN1YnNjcmliZUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5vbkZpbmFsbHkoKTtcbiAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBwdXRgIGh0dHAgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gYm9keVxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8Pn1cbiAgICAgKi9cbiAgICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHRoaXMucmVxdWVzdEludGVyY2VwdG9yKCk7XG4gICAgICAgIHJldHVybiBzdXBlci5wdXQodGhpcy5nZXRGdWxsVXJsKHVybCksIGJvZHksIHRoaXMucmVxdWVzdE9wdGlvbnMob3B0aW9ucykpXG5cdFx0XHQudGltZW91dCh0aGlzLl90aW1lb3V0LCBPYnNlcnZhYmxlLnRocm93KCd0aW1lb3V0X2V4Y2VlZGVkJykgKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMub25DYXRjaClcbiAgICAgICAgICAgIC5kbygocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25TdWJzY3JpYmVTdWNjZXNzKHJlcyk7XG4gICAgICAgICAgICB9LCAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25TdWJzY3JpYmVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25GaW5hbGx5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHJlcXVlc3Qgd2l0aCBgZGVsZXRlYCBodHRwIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTw+fVxuICAgICAqL1xuICAgIGRlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHRoaXMucmVxdWVzdEludGVyY2VwdG9yKCk7XG4gICAgICAgIHJldHVybiBzdXBlci5kZWxldGUodGhpcy5nZXRGdWxsVXJsKHVybCksIHRoaXMucmVxdWVzdE9wdGlvbnMob3B0aW9ucykpXG5cdFx0XHQudGltZW91dCh0aGlzLl90aW1lb3V0LCBPYnNlcnZhYmxlLnRocm93KCd0aW1lb3V0X2V4Y2VlZGVkJykgKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMub25DYXRjaClcbiAgICAgICAgICAgIC5kbygocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25TdWJzY3JpYmVTdWNjZXNzKHJlcyk7XG4gICAgICAgICAgICB9LCAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25TdWJzY3JpYmVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25GaW5hbGx5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJlcXVlc3Qgb3B0aW9ucy5cbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHtSZXF1ZXN0T3B0aW9uc0FyZ3N9XG4gICAgICovXG4gICAgcHJpdmF0ZSByZXF1ZXN0T3B0aW9ucyhvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogUmVxdWVzdE9wdGlvbnNBcmdzIHtcblxuICAgICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5oZWFkZXJzID09IG51bGwpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidG9rZW5cIikpO1xuXHRcdG9wdGlvbnMuaGVhZGVycy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBpbnRlcmNlcHRvci5cbiAgICAgKi9cbiAgICBwcml2YXRlIHJlcXVlc3RJbnRlcmNlcHRvcigpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXJ0LmVtaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNwb25zZSBpbnRlcmNlcHRvci5cbiAgICAgKi9cbiAgICBwcml2YXRlIHJlc3BvbnNlSW50ZXJjZXB0b3IoKTogdm9pZCB7XG5cdFx0dGhpcy5zdG9wLmVtaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBoYW5kbGVyLlxuICAgICAqIEBwYXJhbSBlcnJvclxuICAgICAqIEBwYXJhbSBjYXVnaHRcbiAgICAgKiBAcmV0dXJucyB7RXJyb3JPYnNlcnZhYmxlfVxuICAgICAqL1xuICAgIHByaXZhdGUgb25DYXRjaChlcnJvcjogUmVzcG9uc2UsIGNhdWdodDogT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG9uU3Vic2NyaWJlU3VjY2Vzc1xuICAgICAqIEBwYXJhbSByZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIG9uU3Vic2NyaWJlU3VjY2VzcyhyZXM6IFJlc3BvbnNlKTogdm9pZCB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ29uU3Vic2NyaWJlU3VjY2VzcygpJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogb25TdWJzY3JpYmVFcnJvclxuICAgICAqIEBwYXJhbSBlcnJvclxuICAgICAqL1xuICAgIHByaXZhdGUgb25TdWJzY3JpYmVFcnJvcihlcnJvcjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXJyb3JFdmVudC5lbWl0KGVycm9yKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBvbkZpbmFsbHlcbiAgICAgKi9cbiAgICBwcml2YXRlIG9uRmluYWxseSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNwb25zZUludGVyY2VwdG9yKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgQVBJIHVybC5cbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldEZ1bGxVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXJsICsgdXJsO1xuICAgIH1cblxufVxuIl19
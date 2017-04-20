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

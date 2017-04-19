import {Injectable, EventEmitter, Output} from '@angular/core';
import {
	Http,
	XHRBackend,
	RequestOptions,
	RequestOptionsArgs,
	Response,
	Headers, Request
} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Router} from "@angular/router";
var appSettings = require("application-settings");

@Injectable()
export class HttpService extends Http {


    @Output() errorEvent: EventEmitter<any> = new EventEmitter(true);
	@Output() start : EventEmitter<any> = new EventEmitter(true);
	@Output() stop : EventEmitter<any> = new EventEmitter(true);

	private _timeout : number = 25000;


    constructor(backend: XHRBackend,
                defaultOptions: RequestOptions,
                private router: Router,
                private _url: string) {

        super(backend, defaultOptions);

    }

    /**
     * Performs any type of http request.
     * @param url
     * @param options
     * @returns {Observable<Response>}
     */
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }

    /**
     * Performs a request with `get` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return super.get(this.getFullUrl(url), this.requestOptions(options))
			.timeout(this._timeout, Observable.throw('timeout_exceeded') )
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    getLocal(url: string, options?: RequestOptionsArgs): Observable<any> {
        return super.get(url, options);
    }

    /**
     * Performs a request with `post` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return super.post(this.getFullUrl(url), body, this.requestOptions(options))
			.timeout(this._timeout, Observable.throw('timeout_exceeded') )
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    login(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
           this.requestInterceptor();
           console.log(this.getFullUrl(url),JSON.stringify(body));
           return super.post(this.getFullUrl(url), body, options)
   			.timeout(this._timeout, Observable.throw('timeout_exceeded') )
               .catch(this.onCatch)
               .do((res: Response) => {
                   this.onSubscribeSuccess(res);
               }, (error: any) => {
                   this.onSubscribeError(error);
               })
               .finally(() => {
                   this.onFinally();
               });
    }

    /**
     * Performs a request with `put` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return super.put(this.getFullUrl(url), body, this.requestOptions(options))
			.timeout(this._timeout, Observable.throw('timeout_exceeded') )
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    /**
     * Performs a request with `delete` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    delete(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return super.delete(this.getFullUrl(url), this.requestOptions(options))
			.timeout(this._timeout, Observable.throw('timeout_exceeded') )
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }


    /**
     * Request options.
     * @param options
     * @returns {RequestOptionsArgs}
     */
    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {

        if (options == null) {
            options = new RequestOptions();
        }

        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Authorization', 'Bearer ' +appSettings.getString("token"));
		options.headers.append('Accept', 'application/json');
        return options;
    }


    /**
     * Request interceptor.
     */
    private requestInterceptor(): void {
		this.start.emit();
    }

    /**
     * Response interceptor.
     */
    private responseInterceptor(): void {
		this.stop.emit();
    }

    /**
     * Error handler.
     * @param error
     * @param caught
     * @returns {ErrorObservable}
     */
    private onCatch(error: Response, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    /**
     * onSubscribeSuccess
     * @param res
     */
    private onSubscribeSuccess(res: Response): void {
        //console.log('onSubscribeSuccess()');
    }

    /**
     * onSubscribeError
     * @param error
     */
    private onSubscribeError(error: any): void {
        this.errorEvent.emit(error);
    }

    /**
     * onFinally
     */
    private onFinally(): void {
        this.responseInterceptor();
    }

    /**
     * Build API url.
     * @param url
     * @returns {string}
     */
    private getFullUrl(url: string): string {
        return this._url + url;
    }

}

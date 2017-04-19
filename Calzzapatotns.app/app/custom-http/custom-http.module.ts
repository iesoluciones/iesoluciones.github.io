import {NgModule, Optional, SkipSelf, ModuleWithProviders, EventEmitter} from '@angular/core';
import {BaseRequestOptions, XHRBackend, Http} from "@angular/http";
import {HttpService} from './http-service';
import {Router} from "@angular/router";


@NgModule({
    imports: [],
    providers: [
        XHRBackend,
        BaseRequestOptions
    ],
    exports: []
})
export class CustomHttpModule {
    constructor(@Optional() @SkipSelf() parentModule: CustomHttpModule) {
        if (parentModule) {
            throw new Error(
                'CustomHttpModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(url?: string): ModuleWithProviders {
        return {
            ngModule: CustomHttpModule,
            providers: [
                {
                    provide: HttpService,
                    useFactory: (xhrBackend, requestOptions, router) => {
                        return new HttpService(xhrBackend, requestOptions, router, url);
                    },
                    deps: [XHRBackend, BaseRequestOptions, Router],
                }
            ]
        };
    }

}

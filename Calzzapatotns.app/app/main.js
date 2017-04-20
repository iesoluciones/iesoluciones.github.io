"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var platform = require("platform");
// before calling .boostrap
if (platform.isIOS) {
    GMSServices.provideAPIKey("AIzaSyBPOdAzDjMEBF2ZYg-dSKGL6uDpqX0oMxs");
}
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);

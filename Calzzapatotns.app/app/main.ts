// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import * as platform from "platform";
declare var GMSServices: any;
// before calling .boostrap
if( platform.isIOS ) {
    GMSServices.provideAPIKey("AIzaSyBPOdAzDjMEBF2ZYg-dSKGL6uDpqX0oMxs");
}
platformNativeScriptDynamic().bootstrapModule(AppModule);

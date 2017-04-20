"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var element_registry_1 = require('nativescript-angular/element-registry');
var geolocation = require('nativescript-geolocation');
var nativescript_google_maps_sdk_1 = require('nativescript-google-maps-sdk');
var style = require('./map-style.json');
var mapsModule = require("nativescript-google-maps-sdk");
var email = require("nativescript-email");
var phone = require("nativescript-phone");
var fs = require("file-system");
element_registry_1.registerElement('MapView', function () { return nativescript_google_maps_sdk_1.MapView; });
var platform = require("platform");
var page_1 = require("ui/page");
var oficinacredito_service_1 = require("./oficinacredito.service");
var user_model_1 = require("../../model/user.model");
var OficinacreditoComponent = (function () {
    function OficinacreditoComponent(router, _oficinacreditoService, page, _userModel, zone) {
        var _this = this;
        this.router = router;
        this._oficinacreditoService = _oficinacreditoService;
        this.page = page;
        this._userModel = _userModel;
        this.zone = zone;
        this.mapView = null;
        this.watchId = null;
        this.centeredOnLocation = false;
        this.showDialog = false;
        this.lista = false;
        this.tienda = {
            nombre: '',
            calle: '',
            numint: '',
            numext: '',
            colonia: '',
            cp: '',
            telefono: ''
        };
        this.mapView2 = null;
        this.watchId2 = null;
        this.centeredOnLocation2 = false;
        this.showDialog2 = false;
        this.lista2 = false;
        this.tienda2 = {
            nombre: '',
            calle: '',
            numint: '',
            numext: '',
            colonia: '',
            cp: '',
            telefono: ''
        };
        this.valid = false;
        this.mapTapped = function (event) {
            //console.log('Map Tapped');
        };
        this.locationReceived = function (position) {
            if (_this.mapView && position && !_this.centeredOnLocation) {
                _this.valid = true;
                _this.mapView.latitude = position.latitude;
                _this.mapView.longitude = position.longitude;
                _this.mapView.zoom = 16;
                _this.centeredOnLocation = true;
            }
        };
        this.locationReceived3 = function (position) {
            if (_this.mapView2 && position && !_this.centeredOnLocation2) {
                _this.valid = true;
                _this.mapView2.latitude = position.latitude;
                _this.mapView2.longitude = position.longitude;
                _this.mapView2.zoom = 16;
                _this.centeredOnLocation2 = true;
            }
        };
        this.locationReceived2 = function (position) {
            if (_this.mapView2 && position && !_this.centeredOnLocation2) {
                var datos = {
                    latitud: position.latitude,
                    longitud: position.longitude,
                    cliente_id: _this.user.cliente_id,
                    ubicacion: 1
                };
                _this._oficinacreditoService.getTiendas(datos).subscribe(function (d) {
                    _this.tiendas2 = d;
                    console.log("Tienda2 => ", JSON.stringify(d));
                    var num = 0;
                    _this.tiendas2.forEach(function (tienda) {
                        //console.log("Tienda2 marker => ", JSON.stringify(tienda));
                        _this.addMarker2({
                            location: { latitude: tienda.lat, longitude: tienda.lng },
                            title: "",
                            snippet: tienda.nombre,
                            userData: { index: 1 + num },
                            data: tienda,
                            icon: ""
                        });
                        num++;
                    });
                });
                _this.valid = true;
                _this.mapView2.latitude = position.latitude;
                _this.mapView2.longitude = position.longitude;
                _this.mapView2.zoom = 16;
                _this.centeredOnLocation2 = true;
            }
        };
    }
    OficinacreditoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page.actionBar.title = "Oficinas de Crédito";
        this._userModel.fetch().then(function (usuario) {
            if (usuario) {
                _this.user = usuario;
            }
        });
    };
    OficinacreditoComponent.prototype.closeDialog = function () {
        //console.log("closeDialog");
        this.showDialog = false;
    };
    OficinacreditoComponent.prototype.closeDialog2 = function () {
        //console.log("closeDialog");
        this.showDialog2 = false;
    };
    OficinacreditoComponent.prototype.getTiendas = function (datos) {
        var _this = this;
        this._oficinacreditoService.getTiendas(datos).subscribe(function (tiendas) {
            _this.tiendas = tiendas;
        });
    };
    OficinacreditoComponent.prototype.changeTab = function () {
        if (this.selectedIndex == 0) {
        }
        else {
        }
    };
    OficinacreditoComponent.prototype.cambio = function () {
        //console.log("Entro cambio");
        if (this.valid) {
            this.lista = !this.lista;
            if (!this.lista) {
                this.mapView = null;
                this.watchId = null;
                this.tapMarker = null;
                this.centeredOnLocation = false;
                this.gMap = null;
                this.selectedIndex = 0;
            }
            else {
                var datos = { latitud: "", longitud: "", cliente_id: this.user.cliente_id, ubicacion: 0 };
                this.getTiendas(datos);
            }
        }
    };
    OficinacreditoComponent.prototype.mapModal = function (tienda) {
        if (tienda.lat != "" && tienda.lng != "") {
            this.tienda = tienda;
            this.showDialog = true;
            this.centeredOnLocation = false;
            this.lista = false;
            var position = void 0;
            position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(tienda.lat, tienda.lng);
            this.locationReceived(position);
        }
    };
    OficinacreditoComponent.prototype.mapModal2 = function (tienda) {
        if (tienda.lat != "" && tienda.lng != "") {
            this.tienda2 = tienda;
            this.showDialog2 = true;
            this.centeredOnLocation2 = false;
            this.lista = false;
            var position = void 0;
            position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(tienda.lat, tienda.lng);
            this.locationReceived3(position);
        }
    };
    OficinacreditoComponent.prototype.enableLocation = function () {
        if (!geolocation.isEnabled()) {
            //console.log("enableLocation 1");
            //console.log('Location not enabled, requesting.');
            return geolocation.enableLocationRequest();
        }
        else {
            //console.log("enableLocation 2");
            return Promise.resolve(true);
        }
    };
    OficinacreditoComponent.prototype.getLocation = function () {
        if (geolocation.isEnabled()) {
            //console.log("getLocation 1");
            return geolocation.getCurrentLocation({
                desiredAccuracy: 10,
                updateDistance: 10,
                minimumUpdateTime: 1000,
                maximumAge: 10000
            });
        }
        //console.log("getLocation 2");
        return Promise.reject('Geolocation not enabled.');
    };
    //Map events
    OficinacreditoComponent.prototype.onMapReady = function (event) {
        var _this = this;
        var datos = { latitud: "", longitud: "", cliente_id: this.user.cliente_id, ubicacion: 0 };
        this._oficinacreditoService.getTiendas(datos).subscribe(function (d) {
            _this.tiendas = d;
            if (_this.mapView || !event.object)
                return;
            _this.mapView = event.object;
            _this.gMap = event.object.gMap;
            _this.mapView.setStyle(style);
            _this.mapView.markerSelect = _this.onMarkerSelect;
            _this.mapView.cameraChanged = _this.onCameraChanged;
            if (platform.isIOS) {
                var UiSettings = _this.gMap.settings;
                UiSettings.myLocationButton = true;
                UiSettings.compassButton = true;
                _this.gMap.myLocationEnabled = true;
            }
            else {
                var UiSettings = _this.gMap.getUiSettings();
                UiSettings.setMyLocationButtonEnabled(true);
                _this.gMap.setMyLocationEnabled(true);
            }
            var num = 0;
            _this.tiendas.forEach(function (tienda) {
                _this.addMarker({
                    location: { latitude: tienda.lat, longitude: tienda.lng },
                    title: "",
                    snippet: tienda.nombre,
                    userData: { index: 1 + num },
                    data: tienda,
                    icon: ""
                });
                num++;
            });
            //console.log("PASO 2");
            _this.enableLocation()
                .then(_this.getLocation)
                .then(function () {
                _this.watchId = geolocation.watchLocation(_this.locationReceived, _this.error, {
                    desiredAccuracy: 10,
                    updateDistance: 10,
                    minimumUpdateTime: 10000,
                    maximumAge: 6000
                });
            }, _this.error);
        });
    };
    ;
    OficinacreditoComponent.prototype.onMapReady2 = function (event) {
        var _this = this;
        //console.log("onMapReady2");
        //let datos = {latitud: "", longitud: "", cliente_id: this.user.cliente_id, ubicacion: 0};
        //this._oficinacreditoService.getTiendas(datos).subscribe(d => {
        //this.tiendas2 = d;
        if (this.mapView2 || !event.object)
            return;
        this.mapView2 = event.object;
        this.gMap2 = event.object.gMap;
        this.mapView2.setStyle(style);
        this.mapView2.markerSelect = this.onMarkerSelect2;
        this.mapView2.cameraChanged = this.onCameraChanged;
        if (platform.isIOS) {
            var UiSettings = this.gMap2.settings;
            UiSettings.myLocationButton = true;
            UiSettings.compassButton = true;
            this.gMap2.myLocationEnabled = true;
        }
        else {
            var UiSettings = this.gMap2.getUiSettings();
            UiSettings.setMyLocationButtonEnabled(true);
            this.gMap2.setMyLocationEnabled(true);
        }
        this.enableLocation()
            .then(this.getLocation)
            .then(function () {
            _this.watchId2 = geolocation.watchLocation(_this.locationReceived2, _this.error, {
                desiredAccuracy: 10,
                updateDistance: 10,
                minimumUpdateTime: 10000,
                maximumAge: 6000
            });
        }, this.error);
        //});
    };
    ;
    OficinacreditoComponent.prototype.mail = function (tienda) {
        if (tienda.email) {
            var appPath = fs.knownFolders.currentApp().path;
            var logoPath = appPath + "/assets/logo_calzzapato.png";
            //console.log("mail => " + logoPath);
            email.compose({
                subject: "Yo",
                body: tienda.nombre,
                to: [tienda.email],
                attachments: [
                    {
                        fileName: 'logo_calzzapato.png',
                        path: logoPath,
                        mimeType: 'image/png'
                    }],
                appPickerTitle: 'Compose with..' // for Android, default: 'Open with..'
            }).then(function () {
                //console.log("Email composer closed");
            }, function (err) {
                //console.log("Error: " + err);
            });
        }
    };
    OficinacreditoComponent.prototype.call = function (tienda) {
        if (tienda.telefono) {
            phone.dial(tienda.telefono, true);
        }
    };
    OficinacreditoComponent.prototype.addMarker = function (args) {
        if (!this.mapView || !args || !args.location)
            return;
        var marker = new mapsModule.Marker();
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(args.location.latitude, args.location.longitude);
        marker.title = args.title;
        marker.snippet = args.title;
        marker.userData = args.userData;
        marker.data = args.data;
        marker.icon = 'map';
        this.mapView.addMarker(marker);
        return marker;
    };
    ;
    OficinacreditoComponent.prototype.addMarker2 = function (args) {
        if (!this.mapView2 || !args || !args.location)
            return;
        var marker = new mapsModule.Marker();
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(args.location.latitude, args.location.longitude);
        marker.title = args.title;
        marker.snippet = args.title;
        marker.userData = args.userData;
        marker.data = args.data;
        marker.icon = 'map';
        this.mapView2.addMarker(marker);
        return marker;
    };
    ;
    OficinacreditoComponent.prototype.removeMarker = function (marker) {
        if (this.mapView && marker) {
            this.mapView.removeMarker(marker);
        }
    };
    OficinacreditoComponent.prototype.error = function (err) {
        //console.log('Error: ' + JSON.stringify(err));
    };
    OficinacreditoComponent.prototype.onMarkerSelect = function (event) {
        this.tienda = event.marker.data;
        this.showDialog = true;
        //console.log('Clicked on ' + JSON.stringify(event.marker.data));
    };
    OficinacreditoComponent.prototype.onMarkerSelect2 = function (event) {
        this.tienda2 = event.marker.data;
        this.showDialog2 = true;
        //console.log('Clicked on ' + JSON.stringify(event.marker.data));
    };
    OficinacreditoComponent.prototype.onCameraChanged = function (event) {
        //console.log('Camera changed: ' + JSON.stringify(event.camera));
    };
    OficinacreditoComponent = __decorate([
        core_1.Component({
            selector: "app-oficina-credito",
            providers: [oficinacredito_service_1.OficinacreditoService],
            //templateUrl: "pages/oficinacredito/oficinacredito.html",
            template: "\n    <ActionBarExtension>\n        <ActionItem *ngIf=\"lista\" icon=\"res://ic_map_white_48dp\" ios.position=\"right\" (tap)=\"cambio()\"></ActionItem> \n        <ActionItem *ngIf=\"!lista\" icon=\"res://ic_view_list_white_48dp\" ios.position=\"right\" (tap)=\"cambio()\"></ActionItem>\n    </ActionBarExtension>\n    <GridLayout width=\"100%\" height=\"100%\" >\n        <TabView #element [(ngModel)]=\"selectedIndex\" (ngModelChange)=\"changeTab($event)\">  \n            <GridLayout width=\"100%\" height=\"100%\" *tabItem=\"{title: 'MI CIUDAD'}\" backgroundColor=\"#EAEAEA\">\n                <ListView [visibility]=\"lista ? 'visible' : 'collapse'\" [items]='tiendas' backgroundColor=\"#EAEAEA\" separatorColor=\"#07314a\"  >\n                    <template let-item='item'  >\n                        <GridLayout class=\"stack-template\">\n                            <grid-layout columns=\"55, auto, *, *\" rows=\"55, auto, *,*,*\" class=\"list-item\"\n                                         style=\"padding: 10px 15px 15px 1px\">\n                                <GridView row=\"0\" col=\"0\" style=\"border-radius: 30px;background-color:#EE2933;\" height=\"55\" width=\"55\">\n                                    <Label class=\"label-suc\" text=\"SUC\" height=\"55\" width=\"55\" style=\"color: white;font-weight: bold;border-radius: 30;text-align: center;vertical-align: center;background-color:#EE2933;\"></Label>\n                                </GridView>\n                                    <Label  row=\"0\" rowSpan=\"2\" col=\"1\" colSpan=\"3\" text=\"{{item.nombre}}\"\n                                           style=\"color: #EE2933;font-weight: bold;font-size: 18px;vertical-align: top;\" textWrap=\"true\"></Label>\n                                <stack-layout row=\"1\" col=\"1\" style=\"margin:0;padding:0;\">\n                                    <Label class=\"label-info\" text=\"Direcci\u00F3n\" style=\"margin:0;padding:0px 0px 0px 1px;\"></Label>\n                                </stack-layout>\n                                <stack-layout row=\"1\" col=\"2\" colSpan=\"2\" style=\"margin:0px 0px 10px 0px;padding:0;\">\n                                    <Label class=\"label-info\" *ngIf=\"item.calle\" text=\"{{item.calle}},\"\n                                           style=\"margin:0;padding:0px 0px 0px 15px;text-align: right\" textWrap=\"true\"></Label>\n                                    <Label class=\"label-info\" *ngIf=\"item.numint || item.numext\"\n                                           text=\"{{(item.numint) ? 'Int. #'+item.numint : ''}}{{(item.numext) ? ' Ext. #'+item.numext : ''}},\"\n                                           style=\"margin:0;padding:0px 0px 0px 15px;text-align:right\" textWrap=\"true\"></Label>\n                                    <Label class=\"label-info\" *ngIf=\"item.colonia\" text=\"Col. {{item.colonia}},\"\n                                           style=\"margin:0;padding:0px 0px 0px 15px;text-align: right\" textWrap=\"true\"></Label>\n                                    <Label class=\"label-info\" *ngIf=\"item.cp\" text=\"C.P. {{item.cp}}.\"\n                                           style=\"margin:0;padding:0px 0px 0px 15px;text-align: right\" textWrap=\"true\"></Label>\n                                </stack-layout>\n     \n                                <stack-layout row=\"3\" col=\"1\"\n                                              style=\"margin:0px 0px 20px 0px;padding:0px 0px 10px 0px;  border-color: #D9D9D9;border-width: 0 0 1 0;\">\n                                    <Label class=\"label-info\" text=\"Tel\u00E9fono\" style=\"margin:0;padding:0px 0px 0px 1px;\" textWrap=\"true\"></Label>\n                                </stack-layout>\n                                <stack-layout row=\"3\" col=\"2\" colSpan=\"3\"\n                                              style=\"margin:0px 0px 20px 0px;padding:0px 0px 10px 0px;  border-color: #D9D9D9;border-width: 0 0 1 0;\">\n                                    <Label class=\"label-info\" *ngIf=\"item.telefono\" text=\"{{item.telefono}}\"\n                                           style=\"margin:0;padding:0px 0px 0px 15px;text-align: right\" textWrap=\"true\"></Label>\n                                </stack-layout>\n                                <Image  class=\"imagen-bottom-card\" row=\"4\" col=\"1\" src=\"~/assets/map2.png\" stretch=\"aspectFit\" horizontalAlignment=\"center\"\n                                       (tap)=\"mapModal(item)\"></Image>\n                                <Image class=\"imagen-bottom-card\" row=\"4\" col=\"2\" src=\"~/assets/phone.png\" stretch=\"aspectFit\"\n                                       horizontalAlignment=\"center\" (tap)=\"call(item)\"></Image>\n                                <Image  class=\"imagen-bottom-card\" row=\"4\" col=\"3\" src=\"~/assets/mail.png\" stretch=\"aspectFit\"\n                                       horizontalAlignment=\"center\" (tap)=\"mail(item)\"></Image>\n                            </grid-layout> \n                        </GridLayout>\n                    </template>\n                </ListView> \n                <GridLayout [visibility]=\"!lista ? 'visible' : 'collapse'\">\n                    <MapView top=\"0\" left=\"0\" width=\"100%\" height=\"100%\" (mapReady)=\"onMapReady($event)\"\n                             (coordinateTapped)=\"mapTapped($event)\" (markerSelect)=\"onMarkerSelect($event)\"></MapView>\n                    <Image src=\"res://icon\" width=\"60px\" cssClass=\"menu-button\" style=\"margin:0;padding: 0\"\n                           horizontalAlignment=\"left\" verticalAlignment=\"top\"></Image>\n                    <stack-layout [visibility]=\"showDialog ? 'visible' : 'collapse'\" class=\"modal\"\n                                  horizontalAlignment=\"center\" verticalAlignment=\"center\" height=\"300\">\n                        <grid-layout columns=\"55, auto, *, *\" rows=\"55, auto, *,*,*\" style=\"padding: 10px 15px 15px 1px\" style.backgroundColor=\"white\">\n                            <GridView row=\"0\" col=\"0\" style=\"border-radius: 30px;background-color:#EE2933;\" height=\"100%\" width=\"100%\">\n                                <Label class=\"label-suc\" text=\"SUC\" backgroundColor=\"#EE2933\" height=\"55\" width=\"55\" style=\"color: white;font-weight: bold;border-radius: 30;text-align: center;\"></Label>\n                            </GridView>\n                            <stack-layout row=\"0\" col=\"1\" colSpan=\"2\">\n                                <Label class=\"borde\" textWrap=\"true\" dock=\"bottom\" row=\"1\" marginTop=\"10%\"\n                                       style=\"color: #EE2933;font-weight: bold;font-size: 15px\" text=\"{{tienda.nombre}}\">\n                                </Label>\n                            </stack-layout>\n                            <stack-layout row=\"0\" col=\"3\" (tap)=\"closeDialog()\">\n                                <Label text=\"X\" style=\"text-align: right\"></Label>\n                            </stack-layout>\n                            <stack-layout row=\"1\" col=\"1\" style=\"margin:0;padding:0;\">\n                                <Label text=\"Direcci\u00F3n\" style=\"margin:0;padding:0px 0px 0px 1px;\"></Label>\n                            </stack-layout>\n                            <stack-layout row=\"1\" col=\"2\" colSpan=\"2\" style=\"margin:0px 0px 10px 0px;padding:0;\">\n                                <Label *ngIf=\"tienda.calle\" text=\"{{tienda.calle}},\"\n                                       style=\"margin:0;padding:0px 0px 0px 15px;text-align: left\" textWrap=\"true\"></Label>\n                                <Label *ngIf=\"tienda.numint || tienda.numext\"\n                                       text=\"{{(tienda.numint) ? 'Int. #'+tienda.numint : ''}}{{(tienda.numext) ? ' Ext. #'+tienda.numext : ''}},\"\n                                       style=\"margin:0;padding:0px 0px 0px 15px;text-align: left\"></Label>\n                                <Label *ngIf=\"tienda.colonia\" text=\"Col. {{tienda.colonia}},\"\n                                       style=\"margin:0;padding:0px 0px 0px 15px;text-align: left\"></Label>\n                                <Label *ngIf=\"tienda.cp\" text=\"C.P. {{tienda.cp}}.\"\n                                       style=\"margin:0;padding:0px 0px 0px 15px;text-align: left\"></Label>\n                            </stack-layout>\n    \n                            <stack-layout row=\"3\" col=\"1\"\n                                          style=\"margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;  border-color: #D9D9D9;border-width: 0 0 1 0;\">\n                                <Label text=\"Tel\u00E9fono\" style=\"margin:0;padding:0px 0px 0px 1px;\"></Label>\n                            </stack-layout>\n                            <stack-layout row=\"3\" col=\"2\" colSpan=\"3\"\n                                          style=\"margin:0px 0px 0px 0px;padding:0px 0px 10px 0px;  border-color: #D9D9D9;border-width: 0 0 1 0; \">\n                                <Label *ngIf=\"tienda.telefono\" text=\"{{tienda.telefono}}\"\n                                       style=\"margin:0;padding:0px 0px 0px 15px;text-align: left\"></Label>\n                            </stack-layout>\n                            <Image class=\"imagen-bottom-card\" row=\"4\" col=\"1\" src=\"~/assets/map.png\" stretch=\"aspectFit\"\n                                   horizontalAlignment=\"center\"></Image>\n                            <Image class=\"imagen-bottom-card\" row=\"4\" col=\"2\" src=\"~/assets/phone.png\" stretch=\"aspectFit\"\n                                   horizontalAlignment=\"center\" (tap)=\"call(tienda)\"></Image>\n                            <Image class=\"imagen-bottom-card\" row=\"4\" col=\"3\" src=\"~/assets/mail.png\" stretch=\"aspectFit\"\n                                   horizontalAlignment=\"center\" (tap)=\"mail(tienda)\"></Image>\n                        </grid-layout>\n                    </stack-layout>\n                </GridLayout>\n            </GridLayout> \n            <GridLayout height=\"100%\" width=\"100%\" *tabItem=\"{title: 'MI UBICACI\u00D3N'}\" backgroundColor=\"#EAEAEA\">\n                <ListView [visibility]=\"lista ? 'visible' : 'collapse'\" [items]='tiendas2'  backgroundColor=\"#EAEAEA\" separatorColor=\"#07314a\"  >\n                    <template let-item='item' >\n                        <GridLayout class=\"stack-template\">\n                            <grid-layout columns=\"55, auto, *, *\" rows=\"55, auto, *,*,*\" class=\"list-item\"\n                                         style=\"padding: 10px 15px 15px 1px\">\n                                <GridView row=\"0\" col=\"0\" style=\"border-radius: 30px;background-color:#EE2933;\" height=\"55\" width=\"55\">\n                                    <Label class=\"label-suc\" text=\"SUC\" height=\"55\" width=\"55\" style=\"color: white;font-weight: bold;border-radius: 30;text-align: center;vertical-align: center;background-color:#EE2933;\"></Label>\n                                </GridView>\n                                    <Label  row=\"0\" rowSpan=\"2\" col=\"1\" colSpan=\"3\" text=\"{{item.nombre}}\"\n                                           style=\"color: #EE2933;font-weight: bold;font-size: 18px;vertical-align: top;\" textWrap=\"true\"></Label>\n                                <stack-layout row=\"1\" col=\"1\" style=\"margin:0;padding:0;\">\n                                    <Label class=\"label-info\" text=\"Direcci\u00F3n\" style=\"margin:0;padding:0px 0px 0px 1px;\"></Label>\n                                </stack-layout>\n                                <stack-layout row=\"1\" col=\"2\" colSpan=\"2\" style=\"margin:0px 0px 10px 0px;padding:0;\">\n                                    <Label class=\"label-info\" *ngIf=\"item.calle\" text=\"{{item.calle}},\"\n                                           style=\"margin:0;padding:0px 0px 0px 15px;text-align: right\" textWrap=\"true\"></Label>\n                                    <Label class=\"label-info\" *ngIf=\"item.numint || item.numext\"\n                                           text=\"{{(item.numint) ? 'Int. #'+item.numint : ''}}{{(item.numext) ? ' Ext. #'+item.numext : ''}},\"\n                                           style=\"margin:0;padding:0px 0px 0px 15px;text-align: right\"></Label>\n                                    <Label class=\"label-info\" *ngIf=\"item.colonia\" text=\"Col. {{item.colonia}},\"\n                                           style=\"margin:0;padding:0px 0px 0px 15px;text-align: right\"></Label>\n                                    <Label class=\"label-info\" *ngIf=\"item.cp\" text=\"C.P. {{item.cp}}.\"\n                                           style=\"margin:0;padding:0px 0px 0px 15px;text-align: right\"></Label>\n                                </stack-layout>\n     \n                                <stack-layout row=\"3\" col=\"1\"\n                                              style=\"margin:0px 0px 20px 0px;padding:0px 0px 10px 0px;  border-color: #D9D9D9;border-width: 0 0 1 0;\">\n                                    <Label class=\"label-info\" text=\"Tel\u00E9fono\" style=\"margin:0;padding:0px 0px 0px 1px;\"></Label>\n                                </stack-layout>\n                                <stack-layout row=\"3\" col=\"2\" colSpan=\"3\"\n                                              style=\"margin:0px 0px 20px 0px;padding:0px 0px 10px 0px;  border-color: #D9D9D9;border-width: 0 0 1 0;\">\n                                    <Label class=\"label-info\" *ngIf=\"item.telefono\" text=\"{{item.telefono}}\"\n                                           style=\"margin:0;padding:0px 0px 0px 15px;text-align: right\"></Label>\n                                </stack-layout>\n                                <Image  class=\"imagen-bottom-card\" row=\"4\" col=\"1\" src=\"~/assets/map2.png\" stretch=\"aspectFit\" horizontalAlignment=\"center\"\n                                       (tap)=\"mapModal2(item)\"></Image>\n                                <Image class=\"imagen-bottom-card\" row=\"4\" col=\"2\" src=\"~/assets/phone.png\" stretch=\"aspectFit\"\n                                       horizontalAlignment=\"center\" (tap)=\"call(item)\"></Image>\n                                <Image  class=\"imagen-bottom-card\" row=\"4\" col=\"3\" src=\"~/assets/mail.png\" stretch=\"aspectFit\"\n                                       horizontalAlignment=\"center\" (tap)=\"mail(item)\"></Image>\n                            </grid-layout> \n                        </GridLayout>\n                    </template>\n                </ListView>\n                <GridLayout [visibility]=\"!lista ? 'visible' : 'collapse'\">\n                    <MapView top=\"0\" left=\"0\" width=\"100%\" height=\"100%\" (mapReady)=\"onMapReady2($event)\"\n                             (coordinateTapped)=\"mapTapped($event)\" (markerSelect)=\"onMarkerSelect2($event)\"></MapView>\n                    <Image src=\"res://icon\" width=\"60px\" cssClass=\"menu-button\" style=\"margin:0;padding: 0\"\n                           horizontalAlignment=\"left\" verticalAlignment=\"top\"></Image>   \n                    <stack-layout [visibility]=\"showDialog2 ? 'visible' : 'collapse'\" class=\"modal\"\n                                  horizontalAlignment=\"center\" verticalAlignment=\"center\" height=\"300\">\n                        <grid-layout columns=\"55, auto, *, *\" rows=\"55, auto, *,*,*\" style=\"padding: 10px 15px 15px 1px\" style.backgroundColor=\"white\">\n                            <GridView row=\"0\" col=\"0\" style=\"border-radius: 30px;background-color:#EE2933;\" height=\"100%\" width=\"100%\">\n                                <Label class=\"label-suc\" text=\"SUC\" backgroundColor=\"#EE2933\" height=\"55\" width=\"55\" style=\"color: white;font-weight: bold;border-radius: 30;text-align: center;\"></Label>\n                            </GridView>\n                            <stack-layout row=\"0\" col=\"1\" colSpan=\"2\">\n                                <Label class=\"borde\" textWrap=\"true\" dock=\"bottom\" row=\"1\" marginTop=\"10%\"\n                                       style=\"color: #EE2933;font-weight: bold;font-size: 15px\" text=\"{{tienda2.nombre}}\">\n                                </Label>\n                            </stack-layout>\n                            <stack-layout row=\"0\" col=\"3\" (tap)=\"closeDialog2()\">\n                                <Label text=\"X\" style=\"text-align: right\"></Label>\n                            </stack-layout>\n                            <stack-layout row=\"1\" col=\"1\" style=\"margin:0;padding:0;\"> \n                                <Label text=\"Direcci\u00F3n\" style=\"margin:0;padding:0px 0px 0px 1px;\"></Label>\n                            </stack-layout>\n                            <stack-layout row=\"1\" col=\"2\" colSpan=\"2\" style=\"margin:0px 0px 10px 0px;padding:0;\">\n                                <Label *ngIf=\"tienda2.calle\" text=\"{{tienda2.calle}},\"\n                                       style=\"margin:0;padding:0px 0px 0px 15px;text-align: left\" textWrap=\"true\"></Label>\n                                <Label *ngIf=\"tienda2.numint || tienda2.numext\"\n                                       text=\"{{(tienda2.numint) ? 'Int. #'+tienda2.numint : ''}}{{(tienda2.numext) ? ' Ext. #'+tienda2.numext : ''}},\"\n                                       style=\"margin:0;padding:0px 0px 0px 15px;text-align: left\"></Label>\n                                <Label *ngIf=\"tienda2.colonia\" text=\"Col. {{tienda2.colonia}},\"\n                                       style=\"margin:0;padding:0px 0px 0px 15px;text-align: left\"></Label>\n                                <Label *ngIf=\"tienda2.cp\" text=\"C.P. {{tienda2.cp}}.\"\n                                       style=\"margin:0;padding:0px 0px 0px 15px;text-align: left\"></Label>\n                            </stack-layout>\n    \n                            <stack-layout row=\"3\" col=\"1\"\n                                          style=\"margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;  border-color: #D9D9D9;border-width: 0 0 1 0;\">\n                                <Label text=\"Tel\u00E9fono\" style=\"margin:0;padding:0px 0px 0px 1px;\"></Label>\n                            </stack-layout>\n                            <stack-layout row=\"3\" col=\"2\" colSpan=\"3\"\n                                          style=\"margin:0px 0px 0px 0px;padding:0px 0px 10px 0px;  border-color: #D9D9D9;border-width: 0 0 1 0; \">\n                                <Label *ngIf=\"tienda2.telefono\" text=\"{{tienda2.telefono}}\"\n                                       style=\"margin:0;padding:0px 0px 0px 15px;text-align: left\"></Label>\n                            </stack-layout>\n                            <Image class=\"imagen-bottom-card\" row=\"4\" col=\"1\" src=\"~/assets/map.png\" stretch=\"aspectFit\"\n                                   horizontalAlignment=\"center\"></Image>\n                            <Image class=\"imagen-bottom-card\" row=\"4\" col=\"2\" src=\"~/assets/phone.png\" stretch=\"aspectFit\"\n                                   horizontalAlignment=\"center\" (tap)=\"call(tienda2)\"></Image>\n                            <Image class=\"imagen-bottom-card\" row=\"4\" col=\"3\" src=\"~/assets/mail.png\" stretch=\"aspectFit\"\n                                   horizontalAlignment=\"center\" (tap)=\"mail(tienda2)\"></Image>\n                        </grid-layout>\n                    </stack-layout>\n                </GridLayout>\n            </GridLayout>\n        </TabView>\n    </GridLayout>\n",
            styleUrls: ["pages/oficinacredito/css/oficinacredito.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, oficinacredito_service_1.OficinacreditoService, page_1.Page, user_model_1.UserModel, core_1.NgZone])
    ], OficinacreditoComponent);
    return OficinacreditoComponent;
}());
exports.OficinacreditoComponent = OficinacreditoComponent;
var AddLineArgs = (function () {
    function AddLineArgs() {
    }
    return AddLineArgs;
}());
exports.AddLineArgs = AddLineArgs;
var AddMarkerArgs = (function () {
    function AddMarkerArgs() {
    }
    return AddMarkerArgs;
}());
exports.AddMarkerArgs = AddMarkerArgs;

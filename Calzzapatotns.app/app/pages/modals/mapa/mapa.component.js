"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var element_registry_1 = require('nativescript-angular/element-registry');
var geolocation = require('nativescript-geolocation');
var nativescript_google_maps_sdk_1 = require('nativescript-google-maps-sdk');
var mapsModule = require("nativescript-google-maps-sdk");
var color_1 = require("color");
var imageSource = require("image-source");
var style = require('./map-style.json');
var platform = require("platform");
element_registry_1.registerElement("MapViews", function () { return require("nativescript-google-maps-sdk").MapView; });
var MapaComponent = (function () {
    function MapaComponent(params, page) {
        var _this = this;
        this.params = params;
        this.page = page;
        this.mapView = null;
        this.watchId = null;
        this.centeredOnLocation = false;
        this.valid = false;
        this.mapTapped = function (event) {
            _this.removeMarker(_this.tapMarker);
            _this.tapMarker = _this.addMarker({
                location: event.position,
                title: "",
                snippet: 'Snippet',
                userData: [],
                data: [],
                icon: "home"
            });
            _this.valid = true;
        };
        this.locationReceived = function (position) {
            //console.log('GPS Update Received');
            if (_this.mapView && position && !_this.centeredOnLocation) {
                _this.mapView.latitude = position.latitude;
                _this.mapView.longitude = position.longitude;
                _this.mapView.zoom = 16;
                _this.centeredOnLocation = true;
            }
        };
        console.log("ModalContent.constructor geolocalizacion: " + JSON.stringify(params));
        this.position_cliente = params.context;
    }
    MapaComponent.prototype.ngOnInit = function () {
    };
    MapaComponent.prototype.validarButton = function () {
        return !this.valid;
    };
    MapaComponent.prototype.enableLocation = function () {
        if (!geolocation.isEnabled()) {
            //console.log('Location not enabled, requesting.');
            return geolocation.enableLocationRequest();
        }
        else {
            return Promise.resolve(true);
        }
    };
    MapaComponent.prototype.getLocation = function () {
        if (geolocation.isEnabled()) {
            return geolocation.getCurrentLocation({
                desiredAccuracy: 10,
                updateDistance: 10,
                minimumUpdateTime: 1000,
                maximumAge: 10000
            });
        }
        return Promise.reject('Geolocation not enabled.');
    };
    //Map events
    MapaComponent.prototype.onMapReady = function (event) {
        var _this = this;
        console.log("1");
        if (this.mapView || !event.object)
            return;
        this.mapView = event.object;
        this.gMap = event.object.gMap;
        this.mapView.setStyle(style);
        this.mapView.markerSelect = this.onMarkerSelect;
        this.mapView.cameraChanged = this.onCameraChanged;
        console.log("2");
        if (platform.isIOS) {
            var UiSettings = this.gMap.settings;
            UiSettings.myLocationButton = true;
            UiSettings.compassButton = true;
            this.gMap.myLocationEnabled = true;
        }
        else {
            var UiSettings = this.gMap.getUiSettings();
            UiSettings.setMyLocationButtonEnabled(true);
            this.gMap.setMyLocationEnabled(true);
        }
        console.log("3");
        if (this.position_cliente.latitude != null && this.position_cliente.longitude != null) {
            console.log("4");
            this.centeredOnLocation = false;
            var position = void 0;
            position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(this.position_cliente.latitude, this.position_cliente.longitude);
            this.locationReceived(position);
            this.centeredOnLocation = true;
            this.removeMarker(this.tapMarker);
            this.tapMarker = this.addMarker({
                location: position,
                title: "",
                snippet: 'Snippet',
                userData: [],
                data: [],
                icon: "home"
            });
            this.valid = true;
        }
        else {
            console.log("5");
            this.enableLocation()
                .then(this.getLocation)
                .then(function () {
                _this.watchId = geolocation.watchLocation(_this.locationReceived, _this.error, {
                    desiredAccuracy: 10,
                    updateDistance: 10,
                    minimumUpdateTime: 10000,
                    maximumAge: 6000
                });
            }, this.error);
        }
    };
    ;
    MapaComponent.prototype.addPointToLine = function (args) {
        if (!this.mapView || !args || !args.location)
            return;
        var line = args.line;
        if (!line) {
            line = new nativescript_google_maps_sdk_1.Polyline();
            line.visible = true;
            line.width = args.width || 10;
            line.color = args.color || new color_1.Color('Red');
            line.geodesic = args.geodesic != undefined ? args.geodesic : true;
            this.mapView.addPolyline(line);
        }
        line.addPoint(nativescript_google_maps_sdk_1.Position.positionFromLatLng(args.location.latitude, args.location.longitude));
        return line;
    };
    MapaComponent.prototype.addMarker = function (args) {
        if (!this.mapView || !args || !args.location)
            return;
        var marker = new mapsModule.Marker();
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(args.location.latitude, args.location.longitude);
        marker.title = args.title;
        marker.snippet = args.title;
        marker.userData = args.userData;
        marker.data = args.data;
        if (platform.isIOS) {
            marker.icon = 'home';
            console.log("Tranqui");
        }
        else {
            marker.icon = args.icon;
        }
        this.mapView.addMarker(marker);
        return marker;
    };
    ;
    MapaComponent.prototype.clearGpsLine = function () {
        this.removeLine(this.gpsLine);
        this.gpsLine = null;
    };
    ;
    MapaComponent.prototype.clearTapLine = function () {
        this.removeLine(this.tapLine);
        this.tapLine = null;
        this.removeMarker(this.tapMarker);
        this.tapMarker = null;
    };
    MapaComponent.prototype.removeLine = function (line) {
        if (line) {
            line.removeAllPoints();
        }
    };
    MapaComponent.prototype.removeMarker = function (marker) {
        if (this.mapView && marker) {
            this.mapView.removeMarker(marker);
        }
    };
    MapaComponent.prototype.error = function (err) {
        //console.log('Error: ' + JSON.stringify(err));
    };
    MapaComponent.prototype.onMarkerSelect = function (event) {
        //console.log('Clicked on ' + JSON.stringify(event.marker.data));
    };
    MapaComponent.prototype.onCameraChanged = function (event) {
        //console.log('Camera changed: ' + JSON.stringify(event.camera));
    };
    MapaComponent.prototype.guardar = function () {
        var position = { latitude: this.tapMarker.position.latitude, longitude: this.tapMarker.position.longitude };
        this.params.closeCallback(position);
    };
    MapaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./mapa.html",
            styleUrls: ["./css/mapa.css"]
        }), 
        __metadata('design:paramtypes', [modal_dialog_1.ModalDialogParams, page_1.Page])
    ], MapaComponent);
    return MapaComponent;
}());
exports.MapaComponent = MapaComponent;
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

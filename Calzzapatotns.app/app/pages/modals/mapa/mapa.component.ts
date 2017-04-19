import {Component, OnInit, ElementRef, ViewChild} from "@angular/core";
import {ModalDialogParams} from "nativescript-angular/modal-dialog";
import {Page} from "ui/page";
import {registerElement} from 'nativescript-angular/element-registry';
let geolocation = require('nativescript-geolocation');
import {MapView, Marker, Polyline, Position} from 'nativescript-google-maps-sdk';
var mapsModule = require("nativescript-google-maps-sdk");
import {Color} from "color";
var imageSource = require("image-source");
var style = require('./map-style.json');
import {Image} from "ui/image";
import {ImageSource} from "image-source";
import * as platform from "platform";

registerElement("MapViews", () => require("nativescript-google-maps-sdk").MapView);
@Component({
    moduleId: module.id,
    templateUrl: "./mapa.html",
    styleUrls: ["./css/mapa.css"]
})
export class MapaComponent implements OnInit {
    mapView: any = null;
    watchId: number = null;
    gpsLine: Polyline;
    tapLine: Polyline;
    tapMarker: any;
    gpsMarker: any;
    centeredOnLocation: boolean = false;
    valid = false;
    public gMap: any;
    position_cliente: any;

    constructor(private params: ModalDialogParams, private page: Page) {
        console.log("ModalContent.constructor geolocalizacion: " + JSON.stringify(params));
        this.position_cliente = params.context;
    }

    ngOnInit() {

    }

    validarButton() {
        return !this.valid;
    }

    enableLocation() {
        if (!geolocation.isEnabled()) {
            //console.log('Location not enabled, requesting.');
            return geolocation.enableLocationRequest();
        } else {
            return Promise.resolve(true);
        }
    }

    getLocation() {
        if (geolocation.isEnabled()) {
            return geolocation.getCurrentLocation({
                desiredAccuracy: 10,
                updateDistance: 10,
                minimumUpdateTime: 1000,
                maximumAge: 10000
            })
        }
        return Promise.reject('Geolocation not enabled.');
    }

    //Map events
    onMapReady(event) {
        console.log("1");
        if (this.mapView || !event.object) return;
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
            this.gMap.myLocationEnabled = true

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
            let position: Position;
            position = Position.positionFromLatLng(this.position_cliente.latitude, this.position_cliente.longitude);
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
        }else{
            console.log("5");
            this.enableLocation()
            .then(this.getLocation)
                .then(() => {
                    this.watchId = geolocation.watchLocation(this.locationReceived, this.error, {
                        desiredAccuracy: 10,
                        updateDistance: 10,
                        minimumUpdateTime: 10000,
                        maximumAge: 6000
                    });
                }, this.error);
        }

    };

    mapTapped = (event) => {
        this.removeMarker(this.tapMarker);
        this.tapMarker = this.addMarker({
            location: event.position,
            title: "",
            snippet: 'Snippet',
            userData: [],
            data: [],
            icon: "home"
        });
        this.valid = true;
    };

    locationReceived = (position: Position) => {
        //console.log('GPS Update Received');

        if (this.mapView && position && !this.centeredOnLocation) {
            this.mapView.latitude = position.latitude;
            this.mapView.longitude = position.longitude;
            this.mapView.zoom = 16;
            this.centeredOnLocation = true;
        }
    };

    addPointToLine(args: AddLineArgs) {
        if (!this.mapView || !args || !args.location) return;

        let line = args.line;

        if (!line) {
            line = new Polyline();
            line.visible = true;
            line.width = args.width || 10;
            line.color = args.color || new Color('Red');
            line.geodesic = args.geodesic != undefined ? args.geodesic : true;
            this.mapView.addPolyline(line);
        }
        line.addPoint(Position.positionFromLatLng(args.location.latitude, args.location.longitude));

        return line;
    }

    addMarker(args: AddMarkerArgs) {
        if (!this.mapView || !args || !args.location) return;
        let marker = new mapsModule.Marker();
        marker.position = Position.positionFromLatLng(args.location.latitude, args.location.longitude);
        marker.title = args.title;
        marker.snippet = args.title;
        marker.userData = args.userData;
        marker.data = args.data;
        if (platform.isIOS) {
            marker.icon='home';
            console.log("Tranqui");

        }
        else {
            marker.icon = args.icon;
        }
        this.mapView.addMarker(marker);
        return marker;


    };

    clearGpsLine() {
        this.removeLine(this.gpsLine);
        this.gpsLine = null;
    };

    clearTapLine() {
        this.removeLine(this.tapLine);
        this.tapLine = null;
        this.removeMarker(this.tapMarker);
        this.tapMarker = null;
    }

    removeLine(line: Polyline) {
        if (line) {
            line.removeAllPoints();
        }
    }

    removeMarker(marker: Marker) {
        if (this.mapView && marker) {
            this.mapView.removeMarker(marker);
        }
    }

    error(err) {
        //console.log('Error: ' + JSON.stringify(err));
    }

    onMarkerSelect(event) {
        //console.log('Clicked on ' + JSON.stringify(event.marker.data));

    }

    onCameraChanged(event) {
        //console.log('Camera changed: ' + JSON.stringify(event.camera));
    }

    guardar() {
        let position: any = {latitude: this.tapMarker.position.latitude, longitude: this.tapMarker.position.longitude};
        this.params.closeCallback(position);
    }
}

export class AddLineArgs {
    public color: Color;
    public line: Polyline;
    public location: Position;
    public geodesic: boolean;
    public width: number;
}

export class AddMarkerArgs {
    public location: any;
    public title: string;
    public snippet: string;
    public userData: any;
    public data: any;
    public icon: string;

}
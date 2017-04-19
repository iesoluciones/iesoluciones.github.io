import {Component, OnInit, NgZone} from "@angular/core";
import {Router} from "@angular/router";

import {registerElement} from 'nativescript-angular/element-registry';
let geolocation = require('nativescript-geolocation');
import {MapView, Marker, Polyline, Position} from 'nativescript-google-maps-sdk';
import sideDrawerModule = require('nativescript-telerik-ui/sidedrawer');
var style = require('./map-style.json');
var mapsModule = require("nativescript-google-maps-sdk");
import tabViewModule = require("ui/tab-view");
//var permissions = require("nativescript-permissions");
import {Color} from 'color';
import {Image} from "ui/image";
import {ImageSource} from "image-source";
declare var android: any;
import * as email from "nativescript-email";
var phone = require("nativescript-phone");
var fs = require("file-system");
registerElement('MapView', () => MapView);
import * as platform from "platform";
import {Page} from "ui/page";
import {OficinacreditoService} from "./oficinacredito.service";
import {UserModel} from "../../model/user.model";


@Component({
    selector: "app-oficina-credito",
    providers: [OficinacreditoService],
    //templateUrl: "pages/oficinacredito/oficinacredito.html",
    template: `
    <ActionBarExtension>
        <ActionItem *ngIf="lista" icon="res://ic_map_white_48dp" ios.position="right" (tap)="cambio()"></ActionItem> 
        <ActionItem *ngIf="!lista" icon="res://ic_view_list_white_48dp" ios.position="right" (tap)="cambio()"></ActionItem>
    </ActionBarExtension>
    <GridLayout width="100%" height="100%" >
        <TabView #element [(ngModel)]="selectedIndex" (ngModelChange)="changeTab($event)">  
            <GridLayout width="100%" height="100%" *tabItem="{title: 'MI CIUDAD'}" backgroundColor="#EAEAEA">
                <ListView [visibility]="lista ? 'visible' : 'collapse'" [items]='tiendas' backgroundColor="#EAEAEA" separatorColor="#07314a"  >
                    <template let-item='item'  >
                        <GridLayout class="stack-template">
                            <grid-layout columns="55, auto, *, *" rows="55, auto, *,*,*" class="list-item"
                                         style="padding: 10px 15px 15px 1px">
                                <GridView row="0" col="0" style="border-radius: 30px;background-color:#EE2933;" height="55" width="55">
                                    <Label class="label-suc" text="SUC" height="55" width="55" style="color: white;font-weight: bold;border-radius: 30;text-align: center;vertical-align: center;background-color:#EE2933;"></Label>
                                </GridView>
                                    <Label  row="0" rowSpan="2" col="1" colSpan="3" text="{{item.nombre}}"
                                           style="color: #EE2933;font-weight: bold;font-size: 18px;vertical-align: top;" textWrap="true"></Label>
                                <stack-layout row="1" col="1" style="margin:0;padding:0;">
                                    <Label class="label-info" text="Dirección" style="margin:0;padding:0px 0px 0px 1px;"></Label>
                                </stack-layout>
                                <stack-layout row="1" col="2" colSpan="2" style="margin:0px 0px 10px 0px;padding:0;">
                                    <Label class="label-info" *ngIf="item.calle" text="{{item.calle}},"
                                           style="margin:0;padding:0px 0px 0px 15px;text-align: right" textWrap="true"></Label>
                                    <Label class="label-info" *ngIf="item.numint || item.numext"
                                           text="{{(item.numint) ? 'Int. #'+item.numint : ''}}{{(item.numext) ? ' Ext. #'+item.numext : ''}},"
                                           style="margin:0;padding:0px 0px 0px 15px;text-align:right" textWrap="true"></Label>
                                    <Label class="label-info" *ngIf="item.colonia" text="Col. {{item.colonia}},"
                                           style="margin:0;padding:0px 0px 0px 15px;text-align: right" textWrap="true"></Label>
                                    <Label class="label-info" *ngIf="item.cp" text="C.P. {{item.cp}}."
                                           style="margin:0;padding:0px 0px 0px 15px;text-align: right" textWrap="true"></Label>
                                </stack-layout>
     
                                <stack-layout row="3" col="1"
                                              style="margin:0px 0px 20px 0px;padding:0px 0px 10px 0px;  border-color: #D9D9D9;border-width: 0 0 1 0;">
                                    <Label class="label-info" text="Teléfono" style="margin:0;padding:0px 0px 0px 1px;" textWrap="true"></Label>
                                </stack-layout>
                                <stack-layout row="3" col="2" colSpan="3"
                                              style="margin:0px 0px 20px 0px;padding:0px 0px 10px 0px;  border-color: #D9D9D9;border-width: 0 0 1 0;">
                                    <Label class="label-info" *ngIf="item.telefono" text="{{item.telefono}}"
                                           style="margin:0;padding:0px 0px 0px 15px;text-align: right" textWrap="true"></Label>
                                </stack-layout>
                                <Image  class="imagen-bottom-card" row="4" col="1" src="~/assets/map2.png" stretch="aspectFit" horizontalAlignment="center"
                                       (tap)="mapModal(item)"></Image>
                                <Image class="imagen-bottom-card" row="4" col="2" src="~/assets/phone.png" stretch="aspectFit"
                                       horizontalAlignment="center" (tap)="call(item)"></Image>
                                <Image  class="imagen-bottom-card" row="4" col="3" src="~/assets/mail.png" stretch="aspectFit"
                                       horizontalAlignment="center" (tap)="mail(item)"></Image>
                            </grid-layout> 
                        </GridLayout>
                    </template>
                </ListView> 
                <GridLayout [visibility]="!lista ? 'visible' : 'collapse'">
                    <MapView top="0" left="0" width="100%" height="100%" (mapReady)="onMapReady($event)"
                             (coordinateTapped)="mapTapped($event)" (markerSelect)="onMarkerSelect($event)"></MapView>
                    <Image src="res://icon" width="60px" cssClass="menu-button" style="margin:0;padding: 0"
                           horizontalAlignment="left" verticalAlignment="top"></Image>
                    <stack-layout [visibility]="showDialog ? 'visible' : 'collapse'" class="modal"
                                  horizontalAlignment="center" verticalAlignment="center" height="300">
                        <grid-layout columns="55, auto, *, *" rows="55, auto, *,*,*" style="padding: 10px 15px 15px 1px" style.backgroundColor="white">
                            <GridView row="0" col="0" style="border-radius: 30px;background-color:#EE2933;" height="100%" width="100%">
                                <Label class="label-suc" text="SUC" backgroundColor="#EE2933" height="55" width="55" style="color: white;font-weight: bold;border-radius: 30;text-align: center;"></Label>
                            </GridView>
                            <stack-layout row="0" col="1" colSpan="2">
                                <Label class="borde" textWrap="true" dock="bottom" row="1" marginTop="10%"
                                       style="color: #EE2933;font-weight: bold;font-size: 15px" text="{{tienda.nombre}}">
                                </Label>
                            </stack-layout>
                            <stack-layout row="0" col="3" (tap)="closeDialog()">
                                <Label text="X" style="text-align: right"></Label>
                            </stack-layout>
                            <stack-layout row="1" col="1" style="margin:0;padding:0;">
                                <Label text="Dirección" style="margin:0;padding:0px 0px 0px 1px;"></Label>
                            </stack-layout>
                            <stack-layout row="1" col="2" colSpan="2" style="margin:0px 0px 10px 0px;padding:0;">
                                <Label *ngIf="tienda.calle" text="{{tienda.calle}},"
                                       style="margin:0;padding:0px 0px 0px 15px;text-align: left" textWrap="true"></Label>
                                <Label *ngIf="tienda.numint || tienda.numext"
                                       text="{{(tienda.numint) ? 'Int. #'+tienda.numint : ''}}{{(tienda.numext) ? ' Ext. #'+tienda.numext : ''}},"
                                       style="margin:0;padding:0px 0px 0px 15px;text-align: left"></Label>
                                <Label *ngIf="tienda.colonia" text="Col. {{tienda.colonia}},"
                                       style="margin:0;padding:0px 0px 0px 15px;text-align: left"></Label>
                                <Label *ngIf="tienda.cp" text="C.P. {{tienda.cp}}."
                                       style="margin:0;padding:0px 0px 0px 15px;text-align: left"></Label>
                            </stack-layout>
    
                            <stack-layout row="3" col="1"
                                          style="margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;  border-color: #D9D9D9;border-width: 0 0 1 0;">
                                <Label text="Teléfono" style="margin:0;padding:0px 0px 0px 1px;"></Label>
                            </stack-layout>
                            <stack-layout row="3" col="2" colSpan="3"
                                          style="margin:0px 0px 0px 0px;padding:0px 0px 10px 0px;  border-color: #D9D9D9;border-width: 0 0 1 0; ">
                                <Label *ngIf="tienda.telefono" text="{{tienda.telefono}}"
                                       style="margin:0;padding:0px 0px 0px 15px;text-align: left"></Label>
                            </stack-layout>
                            <Image class="imagen-bottom-card" row="4" col="1" src="~/assets/map.png" stretch="aspectFit"
                                   horizontalAlignment="center"></Image>
                            <Image class="imagen-bottom-card" row="4" col="2" src="~/assets/phone.png" stretch="aspectFit"
                                   horizontalAlignment="center" (tap)="call(tienda)"></Image>
                            <Image class="imagen-bottom-card" row="4" col="3" src="~/assets/mail.png" stretch="aspectFit"
                                   horizontalAlignment="center" (tap)="mail(tienda)"></Image>
                        </grid-layout>
                    </stack-layout>
                </GridLayout>
            </GridLayout> 
            <GridLayout height="100%" width="100%" *tabItem="{title: 'MI UBICACIÓN'}" backgroundColor="#EAEAEA">
                <ListView [visibility]="lista ? 'visible' : 'collapse'" [items]='tiendas2'  backgroundColor="#EAEAEA" separatorColor="#07314a"  >
                    <template let-item='item' >
                        <GridLayout class="stack-template">
                            <grid-layout columns="55, auto, *, *" rows="55, auto, *,*,*" class="list-item"
                                         style="padding: 10px 15px 15px 1px">
                                <GridView row="0" col="0" style="border-radius: 30px;background-color:#EE2933;" height="55" width="55">
                                    <Label class="label-suc" text="SUC" height="55" width="55" style="color: white;font-weight: bold;border-radius: 30;text-align: center;vertical-align: center;background-color:#EE2933;"></Label>
                                </GridView>
                                    <Label  row="0" rowSpan="2" col="1" colSpan="3" text="{{item.nombre}}"
                                           style="color: #EE2933;font-weight: bold;font-size: 18px;vertical-align: top;" textWrap="true"></Label>
                                <stack-layout row="1" col="1" style="margin:0;padding:0;">
                                    <Label class="label-info" text="Dirección" style="margin:0;padding:0px 0px 0px 1px;"></Label>
                                </stack-layout>
                                <stack-layout row="1" col="2" colSpan="2" style="margin:0px 0px 10px 0px;padding:0;">
                                    <Label class="label-info" *ngIf="item.calle" text="{{item.calle}},"
                                           style="margin:0;padding:0px 0px 0px 15px;text-align: right" textWrap="true"></Label>
                                    <Label class="label-info" *ngIf="item.numint || item.numext"
                                           text="{{(item.numint) ? 'Int. #'+item.numint : ''}}{{(item.numext) ? ' Ext. #'+item.numext : ''}},"
                                           style="margin:0;padding:0px 0px 0px 15px;text-align: right"></Label>
                                    <Label class="label-info" *ngIf="item.colonia" text="Col. {{item.colonia}},"
                                           style="margin:0;padding:0px 0px 0px 15px;text-align: right"></Label>
                                    <Label class="label-info" *ngIf="item.cp" text="C.P. {{item.cp}}."
                                           style="margin:0;padding:0px 0px 0px 15px;text-align: right"></Label>
                                </stack-layout>
     
                                <stack-layout row="3" col="1"
                                              style="margin:0px 0px 20px 0px;padding:0px 0px 10px 0px;  border-color: #D9D9D9;border-width: 0 0 1 0;">
                                    <Label class="label-info" text="Teléfono" style="margin:0;padding:0px 0px 0px 1px;"></Label>
                                </stack-layout>
                                <stack-layout row="3" col="2" colSpan="3"
                                              style="margin:0px 0px 20px 0px;padding:0px 0px 10px 0px;  border-color: #D9D9D9;border-width: 0 0 1 0;">
                                    <Label class="label-info" *ngIf="item.telefono" text="{{item.telefono}}"
                                           style="margin:0;padding:0px 0px 0px 15px;text-align: right"></Label>
                                </stack-layout>
                                <Image  class="imagen-bottom-card" row="4" col="1" src="~/assets/map2.png" stretch="aspectFit" horizontalAlignment="center"
                                       (tap)="mapModal2(item)"></Image>
                                <Image class="imagen-bottom-card" row="4" col="2" src="~/assets/phone.png" stretch="aspectFit"
                                       horizontalAlignment="center" (tap)="call(item)"></Image>
                                <Image  class="imagen-bottom-card" row="4" col="3" src="~/assets/mail.png" stretch="aspectFit"
                                       horizontalAlignment="center" (tap)="mail(item)"></Image>
                            </grid-layout> 
                        </GridLayout>
                    </template>
                </ListView>
                <GridLayout [visibility]="!lista ? 'visible' : 'collapse'">
                    <MapView top="0" left="0" width="100%" height="100%" (mapReady)="onMapReady2($event)"
                             (coordinateTapped)="mapTapped($event)" (markerSelect)="onMarkerSelect2($event)"></MapView>
                    <Image src="res://icon" width="60px" cssClass="menu-button" style="margin:0;padding: 0"
                           horizontalAlignment="left" verticalAlignment="top"></Image>   
                    <stack-layout [visibility]="showDialog2 ? 'visible' : 'collapse'" class="modal"
                                  horizontalAlignment="center" verticalAlignment="center" height="300">
                        <grid-layout columns="55, auto, *, *" rows="55, auto, *,*,*" style="padding: 10px 15px 15px 1px" style.backgroundColor="white">
                            <GridView row="0" col="0" style="border-radius: 30px;background-color:#EE2933;" height="100%" width="100%">
                                <Label class="label-suc" text="SUC" backgroundColor="#EE2933" height="55" width="55" style="color: white;font-weight: bold;border-radius: 30;text-align: center;"></Label>
                            </GridView>
                            <stack-layout row="0" col="1" colSpan="2">
                                <Label class="borde" textWrap="true" dock="bottom" row="1" marginTop="10%"
                                       style="color: #EE2933;font-weight: bold;font-size: 15px" text="{{tienda2.nombre}}">
                                </Label>
                            </stack-layout>
                            <stack-layout row="0" col="3" (tap)="closeDialog2()">
                                <Label text="X" style="text-align: right"></Label>
                            </stack-layout>
                            <stack-layout row="1" col="1" style="margin:0;padding:0;"> 
                                <Label text="Dirección" style="margin:0;padding:0px 0px 0px 1px;"></Label>
                            </stack-layout>
                            <stack-layout row="1" col="2" colSpan="2" style="margin:0px 0px 10px 0px;padding:0;">
                                <Label *ngIf="tienda2.calle" text="{{tienda2.calle}},"
                                       style="margin:0;padding:0px 0px 0px 15px;text-align: left" textWrap="true"></Label>
                                <Label *ngIf="tienda2.numint || tienda2.numext"
                                       text="{{(tienda2.numint) ? 'Int. #'+tienda2.numint : ''}}{{(tienda2.numext) ? ' Ext. #'+tienda2.numext : ''}},"
                                       style="margin:0;padding:0px 0px 0px 15px;text-align: left"></Label>
                                <Label *ngIf="tienda2.colonia" text="Col. {{tienda2.colonia}},"
                                       style="margin:0;padding:0px 0px 0px 15px;text-align: left"></Label>
                                <Label *ngIf="tienda2.cp" text="C.P. {{tienda2.cp}}."
                                       style="margin:0;padding:0px 0px 0px 15px;text-align: left"></Label>
                            </stack-layout>
    
                            <stack-layout row="3" col="1"
                                          style="margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;  border-color: #D9D9D9;border-width: 0 0 1 0;">
                                <Label text="Teléfono" style="margin:0;padding:0px 0px 0px 1px;"></Label>
                            </stack-layout>
                            <stack-layout row="3" col="2" colSpan="3"
                                          style="margin:0px 0px 0px 0px;padding:0px 0px 10px 0px;  border-color: #D9D9D9;border-width: 0 0 1 0; ">
                                <Label *ngIf="tienda2.telefono" text="{{tienda2.telefono}}"
                                       style="margin:0;padding:0px 0px 0px 15px;text-align: left"></Label>
                            </stack-layout>
                            <Image class="imagen-bottom-card" row="4" col="1" src="~/assets/map.png" stretch="aspectFit"
                                   horizontalAlignment="center"></Image>
                            <Image class="imagen-bottom-card" row="4" col="2" src="~/assets/phone.png" stretch="aspectFit"
                                   horizontalAlignment="center" (tap)="call(tienda2)"></Image>
                            <Image class="imagen-bottom-card" row="4" col="3" src="~/assets/mail.png" stretch="aspectFit"
                                   horizontalAlignment="center" (tap)="mail(tienda2)"></Image>
                        </grid-layout>
                    </stack-layout>
                </GridLayout>
            </GridLayout>
        </TabView>
    </GridLayout>
`,
    styleUrls: ["pages/oficinacredito/css/oficinacredito.css"]
})
export class OficinacreditoComponent implements OnInit {
    public tiendas: any;
    mapView: any = null;
    watchId: number = null;
    tapMarker: any;
    centeredOnLocation: boolean = false;
    public showDialog: boolean = false;
    public gMap: any;
    public selectedIndex: number;
    user: any;
    public lista: boolean = false;
    tienda = {
        nombre: '',
        calle: '',
        numint: '',
        numext: '',
        colonia: '',
        cp: '',
        telefono: ''
    };

    public tiendas2: any;
    mapView2: any = null;
    watchId2: number = null;
    tapMarker2: any;
    centeredOnLocation2: boolean = false;
    public showDialog2: boolean = false;
    public gMap2: any;
    public selectedIndex2: number;
    public lista2: boolean = false;
    tienda2 = {
        nombre: '',
        calle: '',
        numint: '',
        numext: '',
        colonia: '',
        cp: '',
        telefono: ''
    };

    valid = false;

    constructor(private router: Router, private _oficinacreditoService: OficinacreditoService, private page: Page, private _userModel: UserModel, private zone: NgZone) {
    }

    ngOnInit() {
        this.page.actionBar.title = "Oficinas de Crédito";
        this._userModel.fetch().then(usuario => {
            if (usuario) {
                this.user = usuario;
            }
        });

    }

    closeDialog() {
        //console.log("closeDialog");
        this.showDialog = false;
    }

    closeDialog2() {
        //console.log("closeDialog");
        this.showDialog2 = false;
    }

    getTiendas(datos) {
        this._oficinacreditoService.getTiendas(datos).subscribe(tiendas => {
            this.tiendas = tiendas;
        });
    }

    changeTab() {
        if (this.selectedIndex == 0) {
            //console.log("Cambio de tab Mi ciudad");
        } else {
            //console.log("Cambio de tab Mi ubicacion");
        }
    }

    cambio() {
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
            } else {
                let datos = {latitud: "", longitud: "", cliente_id: this.user.cliente_id, ubicacion: 0};
                this.getTiendas(datos);
            }
        }
    }

    mapModal(tienda) {
        if (tienda.lat != "" && tienda.lng != "") {
            this.tienda = tienda;
            this.showDialog = true;
            this.centeredOnLocation = false;
            this.lista = false;
            let position: Position;
            position = Position.positionFromLatLng(tienda.lat, tienda.lng);
            this.locationReceived(position);
        }
    }

    mapModal2(tienda) {
        if (tienda.lat != "" && tienda.lng != "") {
            this.tienda2 = tienda;
            this.showDialog2 = true;
            this.centeredOnLocation2 = false;
            this.lista = false;
            let position: Position;
            position = Position.positionFromLatLng(tienda.lat, tienda.lng);
            this.locationReceived3(position);
        }
    }

    enableLocation() {
        if (!geolocation.isEnabled()) {
            //console.log("enableLocation 1");
            //console.log('Location not enabled, requesting.');
            return geolocation.enableLocationRequest();
        } else {
            //console.log("enableLocation 2");
            return Promise.resolve(true);
        }
    }

    getLocation() {
        if (geolocation.isEnabled()) {
            //console.log("getLocation 1");
            return geolocation.getCurrentLocation({
                desiredAccuracy: 10,
                updateDistance: 10,
                minimumUpdateTime: 1000,
                maximumAge: 10000
            })
        }
        //console.log("getLocation 2");
        return Promise.reject('Geolocation not enabled.');
    }

    //Map events
    onMapReady(event) {
        let datos = {latitud: "", longitud: "", cliente_id: this.user.cliente_id, ubicacion: 0};
        this._oficinacreditoService.getTiendas(datos).subscribe(d => {
            this.tiendas = d;
            if (this.mapView || !event.object) return;
            this.mapView = event.object;
            this.gMap = event.object.gMap;
            this.mapView.setStyle(style);
            this.mapView.markerSelect = this.onMarkerSelect;
            this.mapView.cameraChanged = this.onCameraChanged;
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
            let num: number = 0;
            this.tiendas.forEach((tienda) => {
                this.addMarker({
                    location: {latitude: tienda.lat, longitude: tienda.lng},
                    title: "",
                    snippet: tienda.nombre,
                    userData: {index: 1 + num},
                    data: tienda,
                    icon: ""
                });
                num++;
            });
            //console.log("PASO 2");
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
        });
    };

    onMapReady2(event) {
        //console.log("onMapReady2");
        //let datos = {latitud: "", longitud: "", cliente_id: this.user.cliente_id, ubicacion: 0};
        //this._oficinacreditoService.getTiendas(datos).subscribe(d => {
        //this.tiendas2 = d;
        if (this.mapView2 || !event.object) return;
        this.mapView2 = event.object;
        this.gMap2 = event.object.gMap;
        this.mapView2.setStyle(style);
        this.mapView2.markerSelect = this.onMarkerSelect2;
        this.mapView2.cameraChanged = this.onCameraChanged;
        if (platform.isIOS) {
            var UiSettings = this.gMap2.settings;
            UiSettings.myLocationButton = true;
            UiSettings.compassButton = true;
            this.gMap2.myLocationEnabled = true

        }
        else {
            var UiSettings = this.gMap2.getUiSettings();
            UiSettings.setMyLocationButtonEnabled(true);
            this.gMap2.setMyLocationEnabled(true);
        }
        this.enableLocation()
            .then(this.getLocation)
            .then(() => {
                this.watchId2 = geolocation.watchLocation(this.locationReceived2, this.error, {
                    desiredAccuracy: 10,
                    updateDistance: 10,
                    minimumUpdateTime: 10000,
                    maximumAge: 6000
                });
            }, this.error);
        //});
    };

    mapTapped = (event) => {
        //console.log('Map Tapped');
    };

    mail(tienda) {
        if (tienda.email) {
            let appPath = fs.knownFolders.currentApp().path;
            let logoPath = appPath + "/assets/logo_calzzapato.png";
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
            }).then(
                function () {
                    //console.log("Email composer closed");
                }, function (err) {
                    //console.log("Error: " + err);
                });
        }
    }

    call(tienda) {
        if (tienda.telefono) {
            phone.dial(tienda.telefono, true);
        }
    }

    locationReceived = (position: Position) => {
        if (this.mapView && position && !this.centeredOnLocation) {
            this.valid = true;
            this.mapView.latitude = position.latitude;
            this.mapView.longitude = position.longitude;
            this.mapView.zoom = 16;
            this.centeredOnLocation = true;
        }
    };

    locationReceived3 = (position: Position) => {
        if (this.mapView2 && position && !this.centeredOnLocation2) {
            this.valid = true;
            this.mapView2.latitude = position.latitude;
            this.mapView2.longitude = position.longitude;
            this.mapView2.zoom = 16;
            this.centeredOnLocation2 = true;
        }
    };

    locationReceived2 = (position: Position) => {
        if (this.mapView2 && position && !this.centeredOnLocation2) {
            let datos = {
                latitud: position.latitude,
                longitud: position.longitude,
                cliente_id: this.user.cliente_id,
                ubicacion: 1
            };
            this._oficinacreditoService.getTiendas(datos).subscribe(d => {
                this.tiendas2 = d;
                console.log("Tienda2 => ", JSON.stringify(d));
                let num: number = 0;
                this.tiendas2.forEach((tienda) => {
                    //console.log("Tienda2 marker => ", JSON.stringify(tienda));
                    this.addMarker2({
                        location: {latitude: tienda.lat, longitude: tienda.lng},
                        title: "",
                        snippet: tienda.nombre,
                        userData: {index: 1 + num},
                        data: tienda,
                        icon: ""
                    });
                    num++;
                });
            });
            this.valid = true;
            this.mapView2.latitude = position.latitude;
            this.mapView2.longitude = position.longitude;
            this.mapView2.zoom = 16;
            this.centeredOnLocation2 = true;
        }
    };

    addMarker(args: AddMarkerArgs) {
        if (!this.mapView || !args || !args.location) return;
        let marker = new mapsModule.Marker();
        marker.position = Position.positionFromLatLng(args.location.latitude, args.location.longitude);
        marker.title = args.title;
        marker.snippet = args.title;
        marker.userData = args.userData;
        marker.data = args.data;
        marker.icon = 'map';
        this.mapView.addMarker(marker);
        return marker;
    };

    addMarker2(args: AddMarkerArgs) {
        if (!this.mapView2 || !args || !args.location) return;
        let marker = new mapsModule.Marker();
        marker.position = Position.positionFromLatLng(args.location.latitude, args.location.longitude);
        marker.title = args.title;
        marker.snippet = args.title;
        marker.userData = args.userData;
        marker.data = args.data;
        marker.icon = 'map';
        this.mapView2.addMarker(marker);
        return marker;
    };

    removeMarker(marker: Marker) {
        if (this.mapView && marker) {
            this.mapView.removeMarker(marker);
        }
    }

    error(err) {
        //console.log('Error: ' + JSON.stringify(err));
    }

    onMarkerSelect(event) {
        this.tienda = event.marker.data;
        this.showDialog = true;
        //console.log('Clicked on ' + JSON.stringify(event.marker.data));

    }

    onMarkerSelect2(event) {
        this.tienda2 = event.marker.data;
        this.showDialog2 = true;
        //console.log('Clicked on ' + JSON.stringify(event.marker.data));

    }

    onCameraChanged(event) {
        //console.log('Camera changed: ' + JSON.stringify(event.camera));
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
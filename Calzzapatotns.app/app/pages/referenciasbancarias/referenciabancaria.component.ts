import {Component, OnInit, LOCALE_ID} from "@angular/core";
import {Router} from "@angular/router";
import {ReferenciabancariaService} from "./referenciabancaria.service";
import {Page} from "ui/page";
import {ClienteModel} from "../../model/cliente.model";
var dialogs = require("ui/dialogs");
@Component({
    selector: "my-app-reterenciasbancarias",
    providers: [ReferenciabancariaService,{ provide: LOCALE_ID, useValue: "es-MX" }],
    //templateUrl: "pages/referenciasbancarias/referenciabancaria.html",
    template:`
    <GridLayout rows="*" height="100%" width="100%">
        <TabView #element [(ngModel)]="selectedIndex">
            <GridLayout width="100%" height="100%" *tabItem="{title: 'PARA CORTE'}">
                <StackLayout row="0">
                   <ListView [items]='referencias' width="100%" height="100%">
                       <template let-item='item'>
                           <GridLayout style="background-color: #EAEAEA">
                               <GridLayout columns="100,*" rows="auto,auto,auto" class="cobrado">
                                   <Label col="0" row="0" text="{{item.Entidad}}" style="text-align: left"></Label>
                                   <Label col="1" row="0" text="{{item.FechaPago | date: 'dd MMM yyyy'}}" style="text-align: right"></Label>
                                   
                                   <Label col="0" row="1" text="Convenio" style="text-align: left"></Label>
                                   <Label col="1" row="1" text="{{item.Convenio}}" style="text-align: right"></Label>
                                   
                                   <Label col="0" row="2" text="Referencia" style="text-align: left"></Label>
                                   <Label col="1" row="2" text="{{item.Referencia}}" style="text-align: right" textWrap="true"></Label>
                               </GridLayout>
                           </GridLayout>
                       </template>
                   </ListView>
                </StackLayout>
            </GridLayout>
            <GridLayout *tabItem="{title: 'GENERALES'}" style="background-color: #EAEAEA">
                <StackLayout row="0">
                   <ListView [items]='referenciasg' width="100%" height="100%">
                       <template let-item='item'>
                           <GridLayout style="background-color: #EAEAEA">
                               <GridLayout columns="100,*" rows="auto,auto,auto" class="cobrado">
                                   <Label col="0" row="0" colSpan="2" text="{{item.Banco}}" style="text-align: left"></Label>
                                   <!--<Label col="1" row="0" text="{{item.FechaPago | date: 'dd MMM yyyy'}}" style="text-align: right"></Label>-->
                                   
                                   <Label col="0" row="1" text="Cuenta" style="text-align: left"></Label>
                                   <Label col="1" row="1" text="{{item.Cuenta}}" style="text-align: right"></Label>
                                   
                                   <Label col="0" row="2" text="Referencia" style="text-align: left"></Label>
                                   <Label col="1" row="2" text="{{item.Referencia}}" style="text-align: right" textWrap="true"></Label>
                               </GridLayout>
                           </GridLayout>
                       </template>
                   </ListView>
                </StackLayout>
            </GridLayout>
        </TabView>
    </GridLayout>
`,
    styleUrls: ["pages/referenciasbancarias/css/referenciabancaria.css"]
})
export class ReferenciabancariaComponent implements OnInit {
    public referencias:any;
    public referenciasg:any;
    constructor(private router: Router, private _referenciabancariaService : ReferenciabancariaService, private page: Page,private _clienteModel: ClienteModel) {
    }

    ngOnInit() {
        this.page.actionBar.title = "Referencias Bancarias";
        this._clienteModel.fetch().then(cliente => {
            console.log("cliente",JSON.stringify(cliente));
            if (cliente) {
                this._referenciabancariaService.getReferenciasBancarias(cliente.codigo).subscribe(referencias=>{
                    this.referencias = referencias.ReferenciasBancarias;
                    console.log("referencias123=> ",JSON.stringify(this.referencias));
                });
                this._referenciabancariaService.getReferenciasBancariasGenericas(cliente.codigo).subscribe(referenciasg=>{
                    this.referenciasg = referenciasg;
                    console.log("referenciasGenericas123=> ",JSON.stringify(this.referencias));
                });
            }
        });
    }

}
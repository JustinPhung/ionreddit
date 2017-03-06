import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
@Component( {
                selector:   'settings',
                templateUrl:    'settings.html'
            })
export class SettingsPage{

    category: string;
    limit: number;

    constructor(public navCtrl: NavController){

    }


    getDefaults(){
        this.category = 'sports';
        this.limit = 10;
    }



}
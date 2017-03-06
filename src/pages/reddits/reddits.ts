import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {RedditService} from "../../app/services/reddit.service";
import {DetailsPage} from "../details/details";
@Component( {
    selector:   'reddits',
    templateUrl:    'reddits.html'
           })
export class RedditsPage{

    items: any;

    constructor(public navCtrl: NavController, private redditService:RedditService){

    }

    ngOnInit(){
        this.getPosts('sports', 5);
    }


    private getPosts( s: string, number: number ) {
        this.redditService.getPosts(s,number).subscribe( response=>{
            this.items = response.data.children;
        })
    }

    viewItem(item){
        this.navCtrl.push(DetailsPage, {
            item:item
        });
    }
}
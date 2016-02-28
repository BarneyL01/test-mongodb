import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {MongoConnection} from './mongo-connection';

@Component({
    selector: 'my-app',
    templateUrl : 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]

})
@RouteConfig([
    


])

export class AppComponent  implements OnInit {
    title = 'Blah';
    mongoC:MongoConnection = new MongoConnection();
    ngOnInit() {
        this.mongoC.runMongoClient();
    }
}

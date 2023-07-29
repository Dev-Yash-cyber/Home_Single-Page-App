import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-property-card',
   // template: '<h1>I am a Card</h1>',
    templateUrl:'property-card-component.html',
   // styles:['h1{font-weight:normal ; }'],
   styleUrls:['property-card-component.css']
}

)
export class PropertyCardComponent{

    Property: any = {
        "Id" : 1,
        "Name" : "Birla House",
        "Type" : "Home",
        "Price" : 12000
}

} 
import { Component } from "@angular/core";

@Component({
    selector:'Tri-Area',
    templateUrl:'./triangle.component.html',
   

})
export class TriangleComponent{
    height:number;
    base:number;
    area:number;
    constructor(){
        this.height=20
        this.base=50
        this.area=(this.height*this.base)/2


    }
    onCalculate(){
        this.area=(this.height*this.base)/2
    }

                }
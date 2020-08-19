//  Template driven form 

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
    uname : string;
    age : number;

    constructor() {
        // this.uname = "Scott";
        // this.age= 30;
     }

    ngOnInit(): void { }

    register(form){
        console.log(form)
        console.log("Uname " + this.uname)
        console.log("Age " + this.age)
    }
}

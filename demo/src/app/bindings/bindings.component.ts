import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bindings',
    templateUrl: './bindings.component.html'
})
export class BindingsComponent implements OnInit {
    message : string =  "Bindings Demo"
    pointerPosition : string = ""
    constructor() { }

    ngOnInit(): void { }

    showPointer(info) {
        console.log(info)
        this.pointerPosition = `X = ${info.x}, Y = ${info.y}`
    }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'st-second',
    template: `
    <h3>{{message}}</h3>
    <button (click)="raiseEvent()">Click Here</button>
    `
})
export class SecondComponent  {
    @Input() message : string;  // Input Property

    // Declare event that sends a string to even handler 
    @Output() process = new EventEmitter<string>()

    raiseEvent(){
         this.process.emit(this.message)   // raise event 
    }
}

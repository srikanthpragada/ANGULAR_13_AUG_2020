import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-first',
    template: 
    `<h1>First Component </h1>
     <st-second [message]="today" (process)="doAnotherProcess($event)"></st-second>
     <hr/>
     <st-second [message]="'Another Message'" (process)="doProcess($event)"></st-second>
    `
})
export class FirstComponent  {
    today : string = new Date().toString()

    // Event Handler for process event 
    doProcess(msg : String) {
        alert("Event occurred with " + msg)
    }
    doAnotherProcess(msg : String) {
        console.log(msg)
    }
}

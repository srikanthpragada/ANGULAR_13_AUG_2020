import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-outer',
    template: `<h1>Outer Component</h1>
               <st-inner></st-inner>
               <h3>Again Outer Component </h3>`
})
export class OuterComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}

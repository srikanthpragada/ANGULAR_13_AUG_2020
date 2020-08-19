import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-inner',
    template: `<h1 style='color:red'>Inner Component</h1>`
})
export class InnerComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}

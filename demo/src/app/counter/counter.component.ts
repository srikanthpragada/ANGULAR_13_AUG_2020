import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    providers : [CounterService]
})
export class CounterComponent implements OnInit {
    constructor(private counterService : CounterService) { }

    ngOnInit(): void { }

    inc() {
        this.counterService.increment();
    }
    dec() {
        this.counterService.decrement();
    }

    getCounter() {
        return  this.counterService.counter;
    }
}

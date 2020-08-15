import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  message: string = "";
  constructor() { }
  
  wish(name: string) {
    this.message = `Hello ${name}, Welcome to Angular!`
  }

}

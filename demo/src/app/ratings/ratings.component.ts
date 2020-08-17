import { Component } from '@angular/core';
import { Skill } from './skill';

@Component({
    selector: 'app-ratings',
    templateUrl: './ratings.component.html'
})
export class RatingsComponent {
    skills: Skill[] = [];
    constructor() { }

    addSkill(name: string, rating: number) {
        var s = new Skill()
        s.name = name
        s.rating = rating
        this.skills.push(s)
    }

    deleleSkill(name: string) {

    }
}

import { Component } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: string[] = [];

  constructor() { }

  addSkill(input: string) {
    if (this.skills.includes(input)) {
        alert("Skill is already present!")
        return;
    }
    this.skills.push(input)
    console.log(this.skills)
  }

  deleteSkill(input: string) {
    for(let idx in this.skills)
    {
          if (this.skills[idx] == input)
          {
            if (confirm("Do you want to delete skill : " + input))
            {
               this.skills.splice(parseInt(idx),1);  // delete element at idx 
            }
            break; 
          }
    }
  }



}

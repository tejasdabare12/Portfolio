import { Component, Input, OnInit } from '@angular/core';

interface SkillSet{
  logo:string;
  percent:string;
  skill:string;
}
@Component({
  selector: 'app-shared-skills-template',
  templateUrl: './shared-skills-template.component.html',
  styleUrls: ['./shared-skills-template.component.scss']
})
export class SharedSkillsTemplateComponent implements OnInit {
  ngOnInit(): void {
   
    this.skillName=this.Data.skill
    console.log(this.skillName)
  }

  skillName:string=""
  @Input() Data!:SkillSet;

}

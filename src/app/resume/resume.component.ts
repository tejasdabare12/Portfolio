import { Component, OnInit } from '@angular/core';
import { Education, Experience, Skills } from '../Constants/resumeData';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  
  Education_heading="Education."
  Experience_heading="Experience."
  codingSkill="Coding Skills."
  BE=Education[0]
  HSC=Education[1]
  Internship=Experience[0]
  Developer=Experience[1]

  allSkills=Skills

  ngOnInit(): void {
  }


  


}

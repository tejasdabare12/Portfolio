import { Component, Input, OnInit} from '@angular/core';

interface dataObj{
  Tittle:string,
  Institute:string,
  Description:string
}

@Component({
  selector: 'app-shared-resume-template',
  templateUrl: './shared-resume-template.component.html',
  styleUrls: ['./shared-resume-template.component.scss']
})

export class SharedResumeTemplateComponent implements OnInit {
@Input() Data!:dataObj;

ngOnInit(): void {
}

}
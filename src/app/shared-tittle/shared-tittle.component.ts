import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-tittle',
  templateUrl: './shared-tittle.component.html',
  styleUrls: ['./shared-tittle.component.scss']
})
export class SharedTittleComponent {

  @Input() Data:string="";
  constructor(){
    
  }
  ngOnInit(): void {
  }
}

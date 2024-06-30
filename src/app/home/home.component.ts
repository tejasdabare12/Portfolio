import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.startWordRotation()
  }
  

  position:string[]=["Developer","Engineer","Coder","Programmer"]
  currentWord:string=this.position[0];
  currentIndex:number=0;
  intervelID:any

  startWordRotation():void{
    this.intervelID = setInterval(()=>{
      this.currentIndex=(this.currentIndex+1)%this.position.length;
      this.currentWord = this.position[this.currentIndex];
    },2000)
  }

}

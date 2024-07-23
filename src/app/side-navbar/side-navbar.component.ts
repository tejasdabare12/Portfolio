import { Component, OnInit } from '@angular/core';
import { DownloadComponent } from '../download/download.component';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent implements OnInit {
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

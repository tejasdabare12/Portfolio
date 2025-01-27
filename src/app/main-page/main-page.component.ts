import { Component, OnInit } from '@angular/core';
import { CentralSeviceService } from '../Services/central-sevice.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

  constructor(private central: CentralSeviceService){}

  ngOnInit(): void {
    this.setName()
  }
  sendData(data:string){
    this.central.setData(data)
  }

  Names:string[]=["Aspiring Web Developer","Junior Code Artisan","Web Development Enthusiast","Rising Web Innovator"]
  currentword:string=this.Names[0]
  currentIndex:number=0;
  intervelId:any

  setName(){
    this.intervelId=setInterval(()=>{
      this.currentIndex=(this.currentIndex+1)%this.Names.length
      this.currentword=this.Names[this.currentIndex]
    },2000)
  }
}

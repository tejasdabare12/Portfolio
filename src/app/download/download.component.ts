import { Component } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent {

  Active: boolean = false;
  onClick(){
    console.log("click")
    this.Active =!this.Active;
  }
}

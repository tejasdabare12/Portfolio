import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnChanges{
  Images=[
    "../../assets/download.svg",
    " ../../assets/green_double_circle_check_mark.jpg"
  ]
  CurrentImage=this.Images[0];
  ngOnChanges(changes: SimpleChanges): void {
  }

  Active: boolean = false;
  onClick() {
    console.log("I am good")
    this.Active = !this.Active;
    this.CurrentImage = this.Active ? this.Images[1] : this.Images[0];
}

downloadPDF() {
  const pdfUrl = '../../assets/Resume_tejas.pdf'; // Replace with your PDF file URL
  
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.target = '_blank'; // Open in a new tab, remove if you want it to download directly
  link.setAttribute('download', ''); // This attribute makes it download when clicked
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
}
//../../assets/green_double_circle_check_mark.jpg


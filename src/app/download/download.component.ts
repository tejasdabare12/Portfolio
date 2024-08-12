import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnChanges{
  constructor(private _snackBar: MatSnackBar){
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

openSnackBar(message: string): void {
  this._snackBar.open(message, undefined,{
    horizontalPosition:'center',
    verticalPosition: 'top',
    duration:4000,
  });
}

downloadPDF() {
  const pdfUrl = '../../assets/TejasDabare.pdf';
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.target = '_blank'; // Open in a new tab, remove if you want it to download directly
  link.setAttribute('download', ''); // This attribute makes it download when clicked
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => {
    this.openSnackBar('The file was successfully downloaded!  ✅');
  }, 2000);

  setTimeout(() => {
    this.openSnackBar('Take a look at my resume! 📄');
},4000)
}

}
import { Component, ElementRef, ViewChild, viewChild, ViewChildren } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  userForm!: FormGroup;
  Data = "Get In Touch."

  constructor(private _snackBar: MatSnackBar) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])

    });
  }
  openSnackBar(message: string): void {
    this._snackBar.open(message, undefined,{
      horizontalPosition:'center',
      verticalPosition: 'top',
      duration:4000,
    });
  }
  sendResponse(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm('service_2l6260k', 'template_h2sl5os', e.target as HTMLFormElement, {
        publicKey: 'wNBEmP6Ltz5FJaZ4D',
      })
      .then(
        () => {
          this.openSnackBar("Thank you! 🙏 Your form has been submitted.");  
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
         this.openSnackBar("Oops! Submission failed due to a technical problem.")
         setTimeout(() => {
          this.openSnackBar("Try to contact via Mail")
         }, 4000);
        },
      );
      (e.target as HTMLFormElement).reset();
  }

}

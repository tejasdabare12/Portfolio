import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent  {

  userForm!: FormGroup;
  Data="Get In Touch."

  constructor(){
    this.userForm=new FormGroup({
      name: new FormControl('',[ Validators.required]),
      email: new FormControl('', [  Validators.required, Validators.email ]),
      subject:new FormControl('', [ Validators.required]),
      message:new FormControl('', [ Validators.required])

    });
  }

  onSubmit(){
   this.sendEmail(this.userForm.value)
  }
  
  public sendEmail(e:Event) {
    debugger
    e.preventDefault();

    emailjs
      .sendForm('service_67cue1h', 'template_h2sl5os', e.target as HTMLFormElement, {
        publicKey: 'wNBEmP6Ltz5FJaZ4D',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }

}

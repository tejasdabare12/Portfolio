import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent  {

  userForm!: FormGroup;

  constructor(){
    this.userForm=new FormGroup({
      name: new FormControl('',[ Validators.required]),
      email: new FormControl('', [  Validators.required, Validators.email ]),
      subject:new FormControl('', [ Validators.required]),
      message:new FormControl('', [ Validators.required])

    });
  }

  onSubmit(){
    if(this.userForm){
      console.log("user form data...",this.userForm.value)
    }
  }

  Data="Get In Touch."

}

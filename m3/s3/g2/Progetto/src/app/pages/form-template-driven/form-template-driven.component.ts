import { Component, NgModule, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',

  styleUrls: ['./form-template-driven.component.scss']
})
export class FormTemplateDrivenComponent {

@ViewChild('f',{static:true}) form!: NgForm;


submit(form: NgForm){
  console.log(form);
  this.form.reset();
}

}

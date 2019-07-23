import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TempalteComponent implements OnInit {
  @ViewChild('f', { static: false }) slForm: NgForm;
  constructor(public router: Router, public route: ActivatedRoute) {

  }
  ngOnInit() {

  }
  onSubmit(form: NgForm) {
    const value = form.value;
    console.log(this.slForm.value);
    this.router.navigate(['/template/record']);
  }
}
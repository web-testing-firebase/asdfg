import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() id: number;
  myForm: FormGroup;

  constructor(public activeModal: NgbActiveModal,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit() {

  }
  continue() {
    // this.router.navigate(['/form']);
  }
} 

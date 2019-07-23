import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewModalComponent } from '../table/view-modal/view-modal.component';
import { FormModalComponent } from '../table/form-modal/form-modal.component';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  first = 'First Application';
  second = 'Second Application';
  third = 'Third Application';
  closeResult: string;
  constructor(public router: Router, private modalService: NgbModal) { }

  ngOnInit() {

  }

  table() {
    const modalRef = this.modalService.open(ViewModalComponent);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  form() {
    const modalRef = this.modalService.open(FormModalComponent);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  template() {
    this.router.navigate(['/template']);
  }
  record() {
    this.router.navigate(['/record']);
  }
}

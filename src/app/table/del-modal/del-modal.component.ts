import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeService } from '../../welcome/welcome.service';

@Component({
  selector: 'app-del-modal',
  templateUrl: './del-modal.component.html',
  styleUrls: ['./del-modal.component.scss']
})
export class DelModalComponent implements OnInit {
  // @Input() public id: number = 0;
  com: number;
  constructor(private welcomeService: WelcomeService,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }
  Delete() {
    this.welcomeService.DeleteUser(this.com);
    console.log(this.com);
  }
}

import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { WelcomeService } from '../welcome/welcome.service';
import { Company } from '../welcome/welcome.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DelModalComponent } from './del-modal/del-modal.component';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  @Input() company: Company[];
  @Input() index: number;
  companies: any = [];
  selectedId: number;
  private id: number;
  subscription: Subscription;

  constructor(public service: WelcomeService, public router: Router, public route: ActivatedRoute, private modalService: NgbModal) {

  }
  ngOnInit() {
    this.subscription = this.service.company_change
      .subscribe(
        (company: Company[]) => {
          this.company = company;
        }
      );
    this.company = this.service.getCompany();
  }
  delete(com) {
    const modalRef = this.modalService.open(DelModalComponent, {});
    modalRef.componentInstance.com = com;

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  back() {
    this.router.navigate(['/welcome']);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


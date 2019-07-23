import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../template.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  public Template;
  constructor(public service: TemplateService, public route: ActivatedRoute, public router: Router) {

  }
  ngOnInit() {
    // this.Template = this.service.getTemplates();
  }
  back() {
    this.router.navigate(['/welcome']);
  }
}
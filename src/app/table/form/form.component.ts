import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { WelcomeService } from 'src/app/welcome/welcome.service';
import { Subscription } from 'rxjs';
import { Company } from 'src/app/welcome/welcome.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  logForm: FormGroup;
  editMode = false;
  id: number;
  subscription: Subscription;
  company: Company[];
  constructor(public router: Router,
    public service: WelcomeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.initForm();
          if (params['id']) {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.logForm.get('id').setValue(+params['id']);
          }
        }
      );
    this.company = this.service.company;
  }

  onSubmit() {
    if (this.editMode) {
      this.service.updateCompany(this.id - 1, this.logForm.value);
      this.router.navigate(['/table']);
    }
    else {
      const newId = this.company.length + 1;
      this.logForm.get('id').setValue(+newId);
      this.service.addCompany(this.logForm.value);
      this.router.navigate(['/table']);
    }
  }

  initForm() {
    this.logForm = new FormGroup({
      'id': new FormControl(0, Validators.required),
      'co_name': new FormControl('', Validators.required),
      'co_profile': new FormControl('', Validators.required),
      'co_address': new FormControl('', Validators.required),
      'co_email': new FormControl('', Validators.required)
    });
  }

}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Company } from './welcome.model';

@Injectable()

export class WelcomeService {
  // company_change = new Subject<Company[]>();
  company_change = new Subject<Company[]>();

  public company: Company[] = [
    new Company(1, 'pqr', 'abc', 'def', 'def@abc'),
    new Company(2, 'abcd', 'cdv', 'dadsfef', 'def@abc'),
    new Company(3, 'defg', 'abvac', 'deasdff', 'def@abc'),
    new Company(4, 'hij', 'abcfad', 'deadff', 'def@abc'),
    new Company(5, 'klo', 'abasc', 'dasdfef', 'def@abc'),
  ];
  getCompany() {
    return this.company.slice();
  }
  getCompanies(index: number) {
    return this.company[index];
  }
  addCompany(company: Company) {
    this.company.push(company);
    this.company_change.next(this.company.slice());
  }
  updateCompany(index: number, newUser: Company) {
    this.company[index] = newUser;
    this.company_change.next(this.company.slice());
  }
  DeleteUser(index: number) {
    this.company.splice(index, 1);
    this.company_change.next(this.company.slice());
  }
}
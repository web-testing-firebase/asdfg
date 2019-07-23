import { Injectable } from '@angular/core';

@Injectable()
export class TemplateService {
  template = [
    {
      first: 'pqr',
      middle: 'abc',
      last: 'def',
      email: 'def@abc'
    },
    {
      first: 'asdf',
      middle: 'adsf',
      last: 'asdf',
      email: 'dadsf@abc'
    }, {
      first: 'adsf',
      middle: 'adsf',
      last: 'asdf',
      email: 'adff@abc'
    },
  ];
  getTemplates() {
    return this.template.slice();
  }
  getTemplate(index: number) {
    return this.template[index];
  }
}
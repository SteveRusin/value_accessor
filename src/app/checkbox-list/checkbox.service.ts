import { Injectable } from '@angular/core';

import { Option } from './chckbox-list.models';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckboxService {
  constructor() {}

  getOptions(): Observable<Option[]> {
    return of([
      {
        id: 1,
        value: true,
        label: 'first',
      },
      {
        id: 2,
        value: false,
        label: 'second',
      },
      {
        id: 3,
        value: true,
        label: 'third',
      },
    ]);
  }
}

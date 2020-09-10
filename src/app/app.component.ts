import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CheckboxService } from 'src/app/checkbox-list';
import { Observable } from 'rxjs';
import { Option } from 'src/app/checkbox-list/chckbox-list.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  option$: Observable<Option[]>;
  optionsControl = new FormControl([1]);

  constructor(private checkboxService: CheckboxService) {}

  ngOnInit() {
    this.option$ = this.checkboxService.getOptions();

    this.optionsControl.valueChanges.subscribe(console.log);

    this.optionsControl.statusChanges.subscribe(() => console.log(this.optionsControl.errors))

    /*     this.option$.subscribe((options) => {
      this.optionsControl.setValue(
        options.filter(({ value }) => value).map(({ id }) => id)
      );
    }); */
  }
}

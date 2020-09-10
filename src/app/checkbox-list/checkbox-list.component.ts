import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormArray,
  NG_VALIDATORS,
  Validator,
  AbstractControl,
} from '@angular/forms';

import { Option } from './chckbox-list.models';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxListComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckboxListComponent),
      multi: true,
    },
  ],
})
export class CheckboxListComponent
  implements OnInit, ControlValueAccessor, Validator {
  @Input()
  options: Option[];

  selectedOptions: number[];

  private onChanges: (option: Option) => void;

  constructor() {}

  ngOnInit() {}

  writeValue(val: number[]) {
    this.selectedOptions = val;
  }

  isChecked({ id }: Option) {
    return this.selectedOptions.find((selectedId) => selectedId === id);
  }

  registerOnChange(fn: (option: Option) => void) {
    this.onChanges = fn;
  }

  registerOnTouched(fn: unknown) {}

  onChange(option: Option) {
    // this.selectedOptions = option.map(({ id }) => id);
    this.onChanges(option);
  }

  validate(control: AbstractControl) {
    return Math.random() > 0.5
      ? null
      : {
          customError: true,
        };
  }
}

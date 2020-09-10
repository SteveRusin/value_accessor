import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxListComponent } from './checkbox-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CheckboxListComponent],
  exports: [CheckboxListComponent],
})
export class CheckboxListModule {}

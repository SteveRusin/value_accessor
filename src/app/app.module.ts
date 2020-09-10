import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CheckboxListModule } from './checkbox-list';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CheckboxListModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

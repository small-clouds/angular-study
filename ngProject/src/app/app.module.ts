import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Demo01Component } from '../../src/app/demo01/demo01.component';
import { Demo02Component } from '../../src/app/demo02/demo02.component';
import { ValidateFileComponent } from './validate-file/validate-file.component';
@NgModule({
  declarations: [
    AppComponent,
    Demo01Component,
    Demo02Component,
    ValidateFileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

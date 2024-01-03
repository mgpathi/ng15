import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelCopyPasteComponent } from './components/excel-copy-paste/excel-copy-paste.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KeysPipe } from './components/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExcelCopyPasteComponent,
    KeysPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

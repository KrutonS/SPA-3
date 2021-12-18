import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudenciViewComponent } from './studenci-view/studenci-view.component';
import { SamochodyComponent } from './samochody/samochody.component';

@NgModule({
  declarations: [
    AppComponent,
    StudenciViewComponent,
    SamochodyComponent
  ],
  imports: [
    BrowserModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

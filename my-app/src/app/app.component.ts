import { Component } from '@angular/core';

import {NgModule} from '@angular/core';
import { AccountsComponent } from './accounts/accounts.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
  imports: [BrowserModule, NgxPaginationModule], // <-- include it in your app module
  declarations: [AccountsComponent],
  bootstrap: [AccountsComponent]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'USC Account Translator';

}

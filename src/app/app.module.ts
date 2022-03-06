import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ApiComponent } from './components/api/api.component';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ApiComponent,
    FooterComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

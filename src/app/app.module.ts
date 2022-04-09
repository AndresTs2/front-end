import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule }  from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiEstService } from './apis/api-est.service';
import { ErrorComponent } from './assets/error/error.component';
import { NavbarComponent } from './assets/navbar/navbar.component';
import { IndexComponent } from './assets/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [
    ApiEstService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatatableComponent } from './pages/datatable/datatable.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { NavbarComponent } from './pages/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    DatatableComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    NgxBootstrapIconsModule
    
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

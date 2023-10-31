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
import { HomeComponent } from './pages/home/home.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    DatatableComponent,
    NavbarComponent,
    HomeComponent,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    NgxBootstrapIconsModule,
    FormsModule
    
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

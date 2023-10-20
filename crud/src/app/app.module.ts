import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatatableComponent } from './pages/datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

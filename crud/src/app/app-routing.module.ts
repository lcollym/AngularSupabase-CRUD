import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormsComponent } from './pages/forms/forms.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'form',
    component: FormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

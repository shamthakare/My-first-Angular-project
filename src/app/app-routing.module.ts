import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ForloopComponent } from './forloop/forloop.component';
import { OpertaiondemoComponent } from './opertaiondemo/opertaiondemo.component';

const routes: Routes = [
  { path: '', component: OpertaiondemoComponent },
  { path: 'TextBox', component: OpertaiondemoComponent },
  { path: 'ForLoop', component: ForloopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

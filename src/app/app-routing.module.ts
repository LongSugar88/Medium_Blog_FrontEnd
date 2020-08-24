import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './blog/login/login.component';
import {RegisterComponent} from './blog/register/register.component';
import {HomeComponent} from './blog/home/home.component';

export const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

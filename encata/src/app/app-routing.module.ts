import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {TableComponent} from './table/table.component';
import {RouteParamComponent} from './route-param/route-param.component';
import {InfoComponent} from './route-param/info/info.component';
import {ParentComponent} from './parent/parent.component';


const items: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'table', component: TableComponent},
  {path: 'example', component: RouteParamComponent, children: [
      {path: 'info', component: InfoComponent},
      {path: 'info/:id', component: InfoComponent}
    ]},
  {path: 'parent', loadChildren: './parent/parent.module#ParentModule'},
];

const routes: Routes = [
  {path: '', component: HeaderComponent, children: items}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

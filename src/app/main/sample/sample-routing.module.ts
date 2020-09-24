import { HrComponent } from './hr/hr.component';
import { NgModule, Component } from '@angular/core';
import { SampleComponent } from './sample.component';
import { RouterModule } from '@angular/router';
import { FinanceComponent } from './finance/finance.component';
import { HomeComponent } from './home/home.component';
import { HostelComponent } from './hostel/hostel.component';
import { SettingsComponent } from './settings/settings.component';
import { InvComponent } from './inv/inv.component';
import { TranspostComponent } from './transpost/transpost.component';

const routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'finance',
    component: FinanceComponent
  },
  {
    path: 'hostel',
    component: HostelComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'hrd',
    component: HrComponent
  },
  {
    path: 'inventory',
    component: InvComponent
  },
  {
    path: 'transport',
    component: TranspostComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class SampleRoutingModule { }

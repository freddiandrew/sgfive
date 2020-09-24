import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { SampleComponent } from './sample.component';
import { SampleRoutingModule } from './sample-routing.module';
import { FinanceComponent } from './finance/finance.component';
import { HostelComponent } from './hostel/hostel.component';
import { HrComponent } from './hr/hr.component';
import { SettingsComponent } from './settings/settings.component';
import { InvComponent } from './inv/inv.component';
import { TranspostComponent } from './transpost/transpost.component';
import { HomeComponent } from './home/home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

@NgModule({
    declarations: [
        SampleComponent,
        FinanceComponent,
        HostelComponent,
        HrComponent,
        SettingsComponent,
        InvComponent,
        TranspostComponent,
        HomeComponent,
    ],
    imports     : [
        SampleRoutingModule,
        TranslateModule,
        FuseSharedModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule
    ],
    exports     : [
        SampleComponent
    ]
})

export class SampleModule
{
}

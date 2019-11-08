import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderForDeveloperComponent } from './components/header-for-developer/header-for-developer.component';
import { HeaderForProjectmanagerComponent } from './components/header-for-projectmanager/header-for-projectmanager.component';
import { HeaderForAdminComponent } from './components/header-for-admin/header-for-admin.component';
import {MatTabsModule} from '@angular/material';
import {AppModule} from '../../app.module';
import {UserModule} from '../user/user.module';
import { HeaderForTesterComponent } from './components/header-for-tester/header-for-tester.component';



@NgModule({
  declarations: [HeaderForDeveloperComponent, HeaderForProjectmanagerComponent, HeaderForAdminComponent, HeaderForTesterComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    AppModule,
    UserModule
  ]
})
export class HeaderModule { }

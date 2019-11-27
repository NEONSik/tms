import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './components/homePage/home-page.component';
import {MatTabsModule} from '@angular/material';
import {NavBarModule} from '../header/nav-bar.module';
import {ProjectTableComponent} from '../project/components/project-table/project-table.component';
import {UserTableComponent} from '../user/components/user-table/user-table.component';
import {ProjectModule} from '../project/project.module';
import {UserModule} from '../user/user.module';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    NavBarModule,
    ProjectModule,
    UserModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule {
}

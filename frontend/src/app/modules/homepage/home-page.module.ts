import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './components/homePage/home-page.component';
import {MatInputModule, MatPaginatorModule, MatSortModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {NavBarModule} from '../header/nav-bar.module';
import {ProjectTableComponent} from '../project/components/project-table/project-table.component';
import {UserTableComponent} from '../user/components/user-table/user-table.component';
import {ProjectModule} from '../project/project.module';
import {UserModule} from '../user/user.module';
import {TaskModule} from '../task/task.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    NavBarModule,
    ProjectModule,
    UserModule,
    TaskModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule {
}

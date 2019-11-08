import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserPageComponent} from './modules/user/components/user-page/user-page.component';
import {Routes, RouterModule} from '@angular/router';
import {StartPageComponent} from './modules/start/components/start-page/start-page.component';
import {ProjectTableComponent} from './modules/project/components/project-table/project-table.component';
import {ErrorComponent} from './modules/error/components/error/error.component';
import {ProjectPageComponent} from './modules/project/components/project-page/project-page.component';
import {LoginPageComponent} from './modules/login/components/login-page/login-page.component';
import {HeaderComponent} from './modules/header/components/header/header.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
// import {BottomSheetOverviewExampleSheet, TaskPageComponent} from './modules/task/components/task-page/task-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule, MatTableModule, MatTabsModule
} from '@angular/material';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HeaderForAdminComponent} from './modules/header/components/header-for-admin/header-for-admin.component';
import {UserModule} from './modules/user/user.module';
import {UserTableComponent} from './modules/user/components/user-table/user-table.component';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {TaskPageComponent} from './modules/task/components/task-page/task-page.component';


const appRoutes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'projects', component: ProjectTableComponent},
  {path: 'taskpage', component: TaskPageComponent},
  {path: 'headeradmin', component: HeaderForAdminComponent},
  {path: 'projectpage', component: ProjectPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    StartPageComponent,
    ProjectTableComponent,
    ErrorComponent,
    ProjectPageComponent,
    LoginPageComponent,
    HeaderComponent,
    TaskPageComponent,
    HeaderForAdminComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatTableModule,
    UserModule,
    MatExpansionModule,
  ],
  providers: [],
  exports: [
    HeaderComponent,
    ProjectTableComponent,
    UserTableComponent,
    TaskPageComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

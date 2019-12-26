import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserPageComponent} from './modules/user/components/user-page/user-page.component';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './modules/homepage/components/homePage/home-page.component';
import {ProjectTableComponent} from './modules/project/components/project-table/project-table.component';
import {ProjectPageComponent} from './modules/project/components/project-page/project-page.component';
import {LoginPageComponent} from './modules/login/components/login-page/login-page.component';
import {NavBarComponent} from './modules/header/components/header/nav-bar.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
// import {BottomSheetOverviewExampleSheet, TaskPageComponent} from './modules/task/components/task-page/task-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatExpansionModule, MatFormFieldControl,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatPaginatorModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule, MatSortModule, MatTableModule, MatTabsModule
} from '@angular/material';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {UserModule} from './modules/user/user.module';
import {UserTableComponent} from './modules/user/components/user-table/user-table.component';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {TaskPageComponent} from './modules/task/components/task-page/task-page.component';
import {NavBarModule} from './modules/header/nav-bar.module';
import {TaskModule} from './modules/task/task.module';
import {ProjectModule} from './modules/project/project.module';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {HomePageModule} from './modules/homepage/home-page.module';
import {LoginModule} from './modules/login/login.module';
import {EditProjectComponent} from './modules/project/components/edit-project/edit-project.component';
import {EditTaskComponent} from './modules/task/components/edit-task/edit-task.component';
import {EditUserComponent} from './modules/user/components/edit-user/edit-user.component';
import {TaskTableComponent} from './modules/task/components/task-table/task-table.component';
import { CheckValuePipe } from './modules/task/pipes/check-value.pipe';


const appRoutes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'projects', component: ProjectTableComponent},
  {path: 'tasks', component: TaskTableComponent},
  {path: 'users', component: UserTableComponent},
  {path: 'taskpage/:id', component: TaskPageComponent},
  {path: 'projectpage/:id', component: ProjectPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'userpage/:id', component: UserPageComponent},
  {path: 'edittask/:id', component: EditTaskComponent},
  {path: 'edituser/:id', component: EditUserComponent},
  {path: 'editproject/:id', component: EditProjectComponent},

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    UserModule,
    HomePageModule,
    NavBarModule,
    TaskModule,
    ProjectModule,
    LoginModule
  ],
  exports: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

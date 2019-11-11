import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserPageComponent} from './modules/user/components/user-page/user-page.component';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './modules/homepage/components/homePage/home-page.component';
import {ProjectTableComponent} from './modules/project/components/project-table/project-table.component';
import {ErrorComponent} from './modules/error/components/error/error.component';
import {ProjectPageComponent} from './modules/project/components/project-page/project-page.component';
import {LoginPageComponent} from './modules/login/components/login-page/login-page.component';
import {NavBarComponent} from './modules/header/components/header/nav-bar.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
// import {BottomSheetOverviewExampleSheet, TaskPageComponent} from './modules/task/components/task-page/task-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatExpansionModule, MatFormFieldControl,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule, MatTableModule, MatTabsModule
} from '@angular/material';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {UserModule} from './modules/user/user.module';
import {UserTableComponent} from './modules/user/components/user-table/user-table.component';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {TaskPageComponent} from './modules/task/components/task-page/task-page.component';
import {NavBarModule} from './modules/header/nav-bar.module';
import {TaskModule} from './modules/task/task.module';
import {ProjectModule} from './modules/project/project.module';




const appRoutes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'projects', component: ProjectTableComponent},
  {path: 'taskpage', component: TaskPageComponent},
  {path: 'projectpage', component: ProjectPageComponent},
  {path: 'home', component: HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    ProjectTableComponent,
    ErrorComponent,
    ProjectPageComponent,
    LoginPageComponent,
    UserTableComponent,
    HomePageComponent
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
    NavBarModule,
    MatExpansionModule,
    TaskModule,
    ProjectModule
  ],
  exports: [
    ProjectTableComponent,
    UserTableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

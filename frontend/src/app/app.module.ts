import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserPageComponent} from './modules/user/components/user-page/user-page.component';
import {Routes, RouterModule} from '@angular/router';
import {StartPageComponent} from './modules/start/components/start-page/start-page.component';
import {ProjectTableComponent} from './modules/project/components/project-table/project-table.component';
import { ErrorComponent } from './error/error.component';
import { ProjectPageComponent } from './modules/project/components/project-page/project-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'projects', component: ProjectTableComponent}
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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

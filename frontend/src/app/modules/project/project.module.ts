import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from '../../services/user.service';
import {TaskService} from '../../services/task.service';
import {ProjectService} from '../../services/project.service';
import {NewProjectComponent} from './components/new-project/new-project.component';
import {
  MatButtonModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatPaginatorModule,
  MatRippleModule,
  MatSelectModule, MatSidenavModule,
  MatSliderModule, MatSortModule,
  MatTableDataSource, MatTableModule, MatTabsModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewTaskComponent} from '../task/components/new-task/new-task.component';
import {ProjectTableComponent} from './components/project-table/project-table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProjectPageComponent} from './components/project-page/project-page.component';
import {NavBarModule} from '../header/nav-bar.module';
import {TaskModule} from '../task/task.module';


@NgModule({
  declarations: [NewProjectComponent, ProjectTableComponent, ProjectPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NavBarModule,
    TaskModule
  ],
  providers: [ProjectService],
  exports: [NewProjectComponent, ProjectTableComponent],
  entryComponents: [NewProjectComponent]
})
export class ProjectModule {
}

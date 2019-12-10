import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskPageComponent} from './components/task-page/task-page.component';
import {TaskService} from '../../services/task.service';
import {AppModule} from '../../app.module';
import {NewTaskComponent} from './components/new-task/new-task.component';
import {
  MatAutocompleteModule,
  MatButtonModule, MatDividerModule,
  MatFormFieldModule,
  MatInputModule, MatListModule, MatNativeDateModule,
  MatSelectModule, MatSortModule,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TaskTableComponent} from './components/task-table/task-table.component';
import {MatPaginatorModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NavBarModule} from '../header/nav-bar.module';
import {RouterModule} from '@angular/router';
import { EditTaskComponent } from './components/edit-task/edit-task.component';


@NgModule({
  declarations: [TaskPageComponent, NewTaskComponent, TaskTableComponent, EditTaskComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    NavBarModule,
    MatListModule,
    MatDividerModule,
    RouterModule
  ],
  exports: [NewTaskComponent, TaskTableComponent, TaskPageComponent],
  providers: [TaskService],
  entryComponents: [NewTaskComponent]
})
export class TaskModule {
}

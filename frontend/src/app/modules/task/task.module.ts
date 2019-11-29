import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskPageComponent} from './components/task-page/task-page.component';
import {TaskService} from '../../services/task.service';
import {AppModule} from '../../app.module';
import {NewTaskComponent} from './components/new-task/new-task.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule, MatSortModule,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TaskTableComponent } from './components/task-table/task-table.component';
import {MatPaginatorModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [TaskPageComponent, NewTaskComponent, TaskTableComponent],
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
  ],
  exports: [NewTaskComponent, TaskTableComponent],
  providers: [TaskService],
  entryComponents: [NewTaskComponent]
})
export class TaskModule {
}

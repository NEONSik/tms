import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskPageComponent} from './components/task-page/task-page.component';
import {TaskService} from '../../services/task.service';
import {AppModule} from '../../app.module';
import {NewTaskComponent} from './components/new-task/new-task.component';
import {MatFormFieldModule, MatInputModule, MatSelectModule, MatTable, MatTableDataSource, MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TaskTableComponent } from './components/task-table/task-table.component';


@NgModule({
  declarations: [TaskPageComponent, NewTaskComponent, TaskTableComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  exports: [NewTaskComponent, TaskTableComponent],
  providers: [TaskService],
  entryComponents: [NewTaskComponent]
})
export class TaskModule {
}

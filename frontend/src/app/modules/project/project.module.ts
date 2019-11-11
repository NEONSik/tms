import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from '../../services/user.service';
import {TaskService} from '../../services/task.service';
import {ProjectService} from '../../services/project.service';
import {NewProjectComponent} from './components/new-project/new-project.component';
import {MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewTaskComponent} from '../task/components/new-task/new-task.component';


@NgModule({
  declarations: [NewProjectComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProjectService],
  exports: [NewProjectComponent],
  entryComponents: [NewProjectComponent]
})
export class ProjectModule {
}

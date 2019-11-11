import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {TaskService} from '../../../../services/task.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Task} from '../../model/task';
import {User} from '../../../user/model/user';
import {Project} from '../../../project/model/project';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  newTaskForm: FormGroup;
  newTask: Task = new Task();

  constructor(public dialogRef: MatDialogRef<NewTaskComponent>, private taskService: TaskService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.newTaskForm = this.formBuilder.group({
      project: ['', [Validators.required]],
      description: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      dueDate: ['', [Validators.required]],
      estimation: ['', [Validators.required]],
      assignee: ['', [Validators.required]]
    });
  }

  close() {
    this.dialogRef.close();
  }

  send() {
    this.newTask.project = new Project();
    this.newTask.project.id = parseFloat(this.newTaskForm.controls.project.value);
    this.newTask.description = this.newTaskForm.controls.description.value;
    this.newTask.priority = this.newTaskForm.controls.priority.value;
    this.newTask.status = 'OPEN';
    this.newTask.duedate = parseFloat(this.newTaskForm.controls.dueDate.value);
    this.newTask.estimation = parseFloat(this.newTaskForm.controls.estimation.value);
    this.newTask.assignee = new User();
    this.newTask.assignee.id = parseFloat(this.newTaskForm.controls.assignee.value);
    this.newTask.reporter = new User();
    this.newTask.reporter.id = 1;
    this.taskService.createTask(this.newTask).subscribe(() => {
      this.dialogRef.close();
    });
  }
}

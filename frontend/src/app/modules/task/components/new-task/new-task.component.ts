import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {TaskService} from '../../../../services/task.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Task} from '../../model/task';
import {User} from '../../../user/model/user';
import {Project} from '../../../project/model/project';
import {ProjectService} from '../../../../services/project.service';
import {of} from 'rxjs';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  newTaskForm: FormGroup;
  newTask: Task = new Task();
  projectOption: string [] = [];
  userOption: string [] = [];
  userOprionsFiltered;
  projectOprionsFiltered;
  userBool = false;
  projectCheck = false;
  assigneeCheck = false;
  constructor(public dialogRef: MatDialogRef<NewTaskComponent>, private taskService: TaskService, private formBuilder: FormBuilder, public  projectService: ProjectService, public userService: UserService) {
  }

  ngOnInit() {
    this.projectService.getProjectManagers().subscribe((data: string[]) => {
      this.projectOption = data;
    });
    this.newTaskForm = this.formBuilder.group({
      project: ['', [Validators.required]],
      description: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      dueDate: ['', [Validators.required]],
      estimation: ['', [Validators.required]],
      assignee: ['', [Validators.required]]
    });
    this.autocomplete();
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
    this.newTask.dueDate = parseFloat(this.newTaskForm.controls.dueDate.value);
    this.newTask.estimation = parseFloat(this.newTaskForm.controls.estimation.value);
    this.newTask.assignee = new User();
    this.newTask.assignee.id = parseFloat(this.newTaskForm.controls.assignee.value);
    this.newTask.reporter = new User();
    this.newTask.reporter.id = 1;
    this.taskService.createTask(this.newTask).subscribe(() => {
      this.dialogRef.close();
    });
  }
  autocomplete() {
    this.newTaskForm.controls.project.valueChanges.subscribe(val => {
      this.projectOprionsFiltered = this.projectfilter(val);
      this.userBool = this.projectOption.includes(val);
      this.projectCheck = this.projectOption.includes(val);
      if (this.userBool) {
        this.userService.getAllByProject(val).subscribe((data: string[]) => this.userOption = data);
      } else {
        this.userOption = [];
      }
    });
    this.newTaskForm.controls.assignee.valueChanges.subscribe(val => {
      this.assigneeCheck = this.userOption.includes(val);
      this.userOprionsFiltered = this.userfilter(val);
    });
  }
  projectfilter(value: string) {
    const filterValue = value.toLowerCase();
    return of(this.projectOption.filter((option) => option.toLowerCase().indexOf(filterValue) === 0));
  }

  userfilter(value: string) {
    const filterValue = value.toLowerCase();
    return of(this.userOption.filter((option) => option.toLowerCase().indexOf(filterValue) === 0));
  }
}


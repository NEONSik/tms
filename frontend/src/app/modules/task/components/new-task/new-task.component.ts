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
import {Page} from '../../../../models/page';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  newTaskForm: FormGroup;
  newTask: Task = new Task();
  usersOptions: User[];
  projectsOptions: Project[];
  FilteredUsers;
  FilteredProjects;

  constructor(public dialogRef: MatDialogRef<NewTaskComponent>, private taskService: TaskService, private formBuilder: FormBuilder, public projectService: ProjectService, public userService: UserService) {
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe((data: Page<Project>) => {
      this.projectsOptions = data.content;
    });
    this.userService.getUser().subscribe((data: Page<User>) => {
      this.usersOptions = data.content;
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

  autocomplete() {
    this.newTaskForm.controls.assignee.valueChanges.subscribe(user => {
      this.FilteredUsers = this.filterUser(user);
      this.newTaskForm.controls.project.valueChanges.subscribe(project => {
        this.FilteredProjects = this.filterProject(project);
      });
    });
  }

  close() {
    this.dialogRef.close();
  }

  filterUser(value: string) {
    const filterValue = value.toLowerCase();
    return of(this.usersOptions.filter((option) => option.name.toLowerCase().indexOf(filterValue) === 0).map(user => user.name));
  }

  filterProject(value: string) {
    const filterValue = value.toLowerCase();
    return of(this.projectsOptions.filter((option) => option.projectCode.toLowerCase().indexOf(filterValue) === 0).map(project => project.projectCode));
  }

  send() {
    this.newTask.project = new Project();
    this.newTask.project.id = this.projectsOptions.find(project => project.projectCode === this.newTaskForm.controls.project.value).id;
    this.newTask.description = this.newTaskForm.controls.description.value;
    this.newTask.priority = this.newTaskForm.controls.priority.value;
    this.newTask.status = 'Open';
    this.newTask.dueDate = Date.parse(this.newTaskForm.controls.dueDate.value);
    this.newTask.estimation = parseFloat(this.newTaskForm.controls.estimation.value);
    this.newTask.assignee = new User();
    this.newTask.assignee.id = this.usersOptions.find(user => user.name === this.newTaskForm.controls.assignee.value).id;
    this.newTask.reporter = new User();
    this.newTask.reporter.id = 1;
    this.taskService.createTask(this.newTask).subscribe(() => {
      this.dialogRef.close();
    });
  }
}


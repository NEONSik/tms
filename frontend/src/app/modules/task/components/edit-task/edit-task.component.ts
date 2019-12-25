import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Project} from '../../../project/model/project';
import {User} from '../../../user/model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../services/user.service';
import {ProjectService} from '../../../../services/project.service';
import {Page} from '../../../../models/page';
import {of} from 'rxjs';
import {Task} from '../../model/task';
import {TaskService} from '../../../../services/task.service';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {TransitEventsService} from '../../../../services/transit-events.service';
import {ParseToken} from '../../../../models/parse-token';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  editTaskForm: FormGroup;
  editTask: Task = new Task();
  usersOptions: User[];
  token: string;
  strings: string[];
  projectsOptions: Project[];
  FilteredUsers;
  FilteredProjects;
  roleFromToken:string;
  url: string;
  urlElements: string[];
  private taskId: number;

  constructor(private transitEventsService: TransitEventsService, private taskSnackBar: MatSnackBar, public dialogRef: MatDialogRef<EditTaskComponent>, private router: Router, private activateRoute: ActivatedRoute, private userservice: UserService, private projectService: ProjectService, private taskservice: TaskService, private formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.taskId = this.activateRoute.snapshot.params['id'];
    this.projectService.getProjects().subscribe((data: Page<Project>) => {
      this.projectsOptions = data.content;
    });
    this.userservice.getUsersForAssignee().subscribe((data: Page<User>) => {
      this.usersOptions = data.content;
    });
    this.editTaskForm = this.formbuilder.group({
      project: ['', [Validators.required]],
      description: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      status: ['', [Validators.required]],
      dueDate: ['', [Validators.required]],
      estimation: ['', [Validators.required]],
      assignee: ['', [Validators.required]]
    });
    this.autocomplete();
    this.token = localStorage.getItem('token');
    this.strings = this.token.split('.');
    const payload = JSON.parse(atob(this.strings[1]));
    this.roleFromToken = payload.scopes;
    this.url = document.URL.toString();
    this.urlElements = this.url.split('/');
    this.taskId = parseFloat(this.urlElements[4]);
  }

  autocomplete() {
      this.editTaskForm.controls.project.valueChanges.subscribe(project => {
        this.FilteredProjects = this.filterProject(project);
        this.editTaskForm.controls.assignee.valueChanges.subscribe(user => {
          this.FilteredUsers = this.filterUser(user);
      });
    });
  }

  filterUser(value: string) {
    const filterValue = value.toLowerCase();
    return of(this.usersOptions.filter((option) => option.name.toLowerCase().indexOf(filterValue) === 0).map(user => user.name));
  }

  filterProject(value: string) {
    const filterValue = value.toLowerCase();
    return of(this.projectsOptions.filter((option) => option.projectCode.toLowerCase().indexOf(filterValue) === 0).map(project => project.projectCode));
  }


  updateTask() {
    this.editTask.project = new Project();
    this.editTask.project.id = this.projectsOptions.find(project => project.projectCode === this.editTaskForm.controls.project.value).id;
    this.editTask.description = this.editTaskForm.controls.description.value;
    this.editTask.priority = this.editTaskForm.controls.priority.value;
    this.editTask.status = this.editTaskForm.controls.status.value;
    this.editTask.dueDate = Date.parse(this.editTaskForm.controls.dueDate.value);
    this.editTask.estimation = parseFloat(this.editTaskForm.controls.estimation.value);
    this.editTask.assignee = new User();
    this.editTask.assignee.id = this.usersOptions.find(user => user.name === this.editTaskForm.controls.assignee.value).id;
    this.taskservice.uppdateTask(this.taskId, this.editTask).subscribe(() => {
        this.dialogRef.close();
        this.transitEventsService.myMethod(true);
        this.openSnackBar('User information updated successfully! ', 'Close');
      }, error => {
        this.openSnackBar('Error! Error status: ' + error.status, 'Close');
      }
    );
  }

  close(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this.taskSnackBar.open(message, action, {
      duration: 5000,
    });
  }
}

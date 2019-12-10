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

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  editTaskForm: FormGroup;
  editTask: Task = new Task();
  usersOptions: User[];
  projectsOptions: Project[];
  FilteredUsers;
  FilteredProjects;
  private taskId: number;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private userservice: UserService, private projectService: ProjectService, private taskservice: TaskService, private formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.taskId = this.activateRoute.snapshot.params['id'];
    this.projectService.getProjects().subscribe((data: Page<Project>) => {
      this.projectsOptions = data.content;
    });
    this.userservice.getUser().subscribe((data: Page<User>) => {
      this.usersOptions = data.content;
    });
    this.editTaskForm = this.formbuilder.group({
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
    this.editTaskForm.controls.assignee.valueChanges.subscribe(user => {
      this.FilteredUsers = this.filterUser(user);
      this.editTaskForm.controls.project.valueChanges.subscribe(project => {
        this.FilteredProjects = this.filterProject(project);
      });
    });
  }

  filterUser(value: string) {
    const filterValue = value.toLowerCase();
    return of(this.usersOptions.filter((option) => option.email.toLowerCase().indexOf(filterValue) === 0).map(user => user.email));
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
    this.editTask.status = 'Open';
    this.editTask.dueDate = Date.parse(this.editTaskForm.controls.dueDate.value);
    this.editTask.estimation = parseFloat(this.editTaskForm.controls.estimation.value);
    this.editTask.assignee = new User();
    this.editTask.assignee.id = this.usersOptions.find(user => user.email === this.editTaskForm.controls.assignee.value).id;
    this.editTask.reporter = new User();
    this.editTask.reporter.id = 1;
    this.taskservice.uppdateTask(this.taskId, this.editTask).subscribe(success => alert('Done'),
      error => alert(error)
    );
  }

  navigateToHome(): void {
    this.router.navigate(['home']);
  }
}

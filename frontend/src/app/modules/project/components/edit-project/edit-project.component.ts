import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../../services/project.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Project} from '../../model/project';
import {User} from '../../../user/model/user';
import {of} from 'rxjs';
import {Page} from '../../../../models/page';
import {UserService} from '../../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {TransitEventsService} from '../../../../services/transit-events.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  private projectId: number;
  url: string;
  urlElements: string[];
  editProjectForm: FormGroup;
  editProject: Project = new Project();
  managersOptions: User[];
  managersFilteredOptions;

  constructor( public dialogRef: MatDialogRef<EditProjectComponent>, private transitEventsService: TransitEventsService, private taskSnackBar: MatSnackBar, private router: Router, private activateRoute: ActivatedRoute, private userservice: UserService, private projectService: ProjectService, private formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.projectId = this.activateRoute.snapshot.params['id'];
    this.userservice.getUserByRole('Project Manager').subscribe((data: Page<User>) => {
      this.managersOptions = data.content;
    });
    this.editProjectForm = this.formbuilder.group({
      projectCode: ['', [Validators.required]],
      summary: ['', [Validators.required]],
      projectManager: ['', [Validators.required]]
    });
    this.autocomplete();
    this.url = document.URL.toString();
    this.urlElements = this.url.split('/');
    this.projectId = parseFloat(this.urlElements[4]);
  }

  autocomplete() {
    this.editProjectForm.controls.projectManager.valueChanges.subscribe(expression => {
      this.managersFilteredOptions = this.filterUser(expression);
    });
  }

  filterUser(value: string) {
    const filterValue = value.toLowerCase();
    return of(this.managersOptions.filter((option) => option.email.toLowerCase().indexOf(filterValue) === 0).map(user => user.email));
  }

  updateProject() {
    this.editProject.id = this.projectId;
    this.editProject.projectCode = this.editProjectForm.controls.projectCode.value;
    this.editProject.summary = this.editProjectForm.controls.summary.value;
    this.editProject.projectManager = new User();
    this.editProject.projectManager.id = this.managersOptions
      .find(manager => manager.email === this.editProjectForm.controls.projectManager.value).id;
    this.projectService.uppdateProject(this.projectId, this.editProject).subscribe(() => {
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
  navigateToHome(): void {
    this.router.navigate(['home']);
  }
}

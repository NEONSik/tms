import {Component, OnInit} from '@angular/core';
import {Project} from '../../model/project';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectService} from '../../../../services/project.service';
import {MatDialogRef} from '@angular/material';
import {User} from '../../../user/model/user';
import {UserService} from '../../../../services/user.service';
import {of} from 'rxjs';
import {Page} from '../../../../models/page';
import {TransitEventsService} from '../../../../services/transit-events.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  newProjectForm: FormGroup;
  newProject: Project = new Project();
  managersOptions: User [];
  managersFilteredOptions;

  constructor(private  projectSnackBar: MatSnackBar, private projectservice: ProjectService, public dialogRef: MatDialogRef<NewProjectComponent>,
              private userService: UserService, private  formbuilder: FormBuilder, private transitEventsService: TransitEventsService) {
  }

  ngOnInit() {
    this.userService.getUserByRole(`Project Manager`).subscribe((data: Page<User>) => {
      this.managersOptions = data.content;
    });
    this.newProjectForm = this.formbuilder.group({
      projectCode: ['', [Validators.required]],
      summary: ['', [Validators.required]],
      projectManager: ['', [Validators.required]]
    });
    this.autocomplete();
  }

  autocomplete() {
    this.newProjectForm.controls.projectManager.valueChanges.subscribe(expression => {
      this.managersFilteredOptions = this.filterUser(expression);
    });
  }

  filterUser(value: string) {
    const filterValue = value.toLowerCase();
    return of(this.managersOptions.filter((option) => option.email.toLowerCase().indexOf(filterValue) === 0).map(user => user.email));
  }

  close() {
    this.dialogRef.close();
  }

  send() {
    this.newProject.projectCode = this.newProjectForm.controls.projectCode.value;
    this.newProject.summary = this.newProjectForm.controls.summary.value;
    this.newProject.projectManager = new User();
    this.newProject.projectManager.id = this.managersOptions
                                            .find(manager => manager.email === this.newProjectForm.controls.projectManager.value).id;
    this.projectservice.createProject(this.newProject).subscribe(() => {
      this.transitEventsService.myMethod(true);
      this.dialogRef.close();
      this.openSnackBar('Project created successfully', 'Close');
    }, error => {
      this.openSnackBar('Error!', 'Close');
    });
  }

  openSnackBar(message: string, action: string) {
    this.projectSnackBar.open(message, action, {
      duration: 5000,
    });
  }
}

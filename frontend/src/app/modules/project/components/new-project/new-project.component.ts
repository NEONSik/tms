import {Component, OnInit} from '@angular/core';
import {Project} from '../../model/project';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectService} from '../../../../services/project.service';
import {MatDialogRef} from '@angular/material';
import {subscribeOn} from 'rxjs/operators';
import {User} from '../../../user/model/user';
import {UserService} from '../../../../services/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  newProjectForm: FormGroup;
  newProject: Project = new Project();
  users: User[];
  role = 'Project Manager';

  constructor(private projectservice: ProjectService, private userservice: UserService, public dialogRef: MatDialogRef<NewProjectComponent>, private  formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.userservice.getProjectManager(this.role).subscribe((data: any) => {
      this.users = data.content;
    });
    this.newProjectForm = this.formbuilder.group({
      projectCode: ['', [Validators.required]],
      summary: ['', [Validators.required]],
      projectManager: ['', [Validators.required]]
    });
  }

  close() {
    this.dialogRef.close();
  }

  send() {
    this.newProject.projectCode = this.newProjectForm.controls.projectCode.value;
    this.newProject.summary = this.newProjectForm.controls.summary.value;
    this.newProject.projectManager.email =  JSON.stringify(this.newProjectForm.controls.projectManager.value);
    this.projectservice.createProject(this.newProject).subscribe(() => {
      this.dialogRef.close();
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {of, Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../../model/project';
import {ProjectService} from '../../../../services/project.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../user/model/user';
import {Page} from '../../../../models/page';
import {UserService} from '../../../../services/user.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {EditProjectComponent} from '../edit-project/edit-project.component';
import {TransitEventsService} from '../../../../services/transit-events.service';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  private projectId: number;
  projectPage: Project = new Project();
  projectManager: User = new User();
  checkRoleFromToken: string;
  strings: string[];
  email: string;
  roleFromToken: string;

  constructor(private transitEventsService: TransitEventsService, private dialog: MatDialog, private  userService: UserService, private formbuilder: FormBuilder, private router: Router, private activateRoute: ActivatedRoute, private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectId = this.activateRoute.snapshot.params['id'];
    this.projectService.getProject(this.projectId).subscribe((data: Project) => {
      this.projectPage = data;
      this.projectManager.email = data.projectManager.email;
    });
    this.transitEventsService.myMethod$.subscribe((event) => {
      this.projectService.getProject(this.projectId).subscribe((dataChanger: Project) => {
        this.projectPage = dataChanger;
      });
    });
    this.checkRoleFromToken = localStorage.getItem('token');
    this.strings = this.checkRoleFromToken.split('.');
    const payload = JSON.parse(atob(this.strings[1]));
    this.roleFromToken = payload.scopes;
  }

  homePage() {
    this.router.navigate(['home']);
  }

  edit() {
    this.dialog.open(EditProjectComponent);
  }
}

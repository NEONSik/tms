import {Component, OnInit} from '@angular/core';
import {of, Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../../model/project';
import {ProjectService} from '../../../../services/project.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../user/model/user';
import {Page} from '../../../../models/page';
import {UserService} from '../../../../services/user.service';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  private projectId: number;
  editProjectForm: FormGroup;
  projectPage: Project = new Project();
  managersOptions: User[];
  managersFilteredOptions;

  constructor(private  userService: UserService, private formbuilder: FormBuilder, private router: Router, private activateRoute: ActivatedRoute, private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectId = this.activateRoute.snapshot.params['id'];
    this.projectService.getProject(this.projectId).subscribe((data: Project) => {
      this.projectPage = data;
    });
  }

  homePage(): void {
    this.router.navigate(['home']);
  }

  edit() {
    this.router.navigate(['editproject', this.projectId]);
  }
}

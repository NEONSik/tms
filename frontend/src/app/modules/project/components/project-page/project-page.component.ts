import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../../model/project';
import {ProjectService} from '../../../../services/project.service';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  private projectId: number;
  projectPage: Project = new Project();

  constructor(private router: Router, private activateRoute: ActivatedRoute, private projectService: ProjectService) {
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
}

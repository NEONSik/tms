import {Component, OnInit} from '@angular/core';
import {Project} from '../../model/project';
import {User} from '../../../user/model/user';
import {TaskService} from '../../../../services/task.service';
import {ProjectService} from '../../../../services/project.service';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit {
  public projectTable: Project[];
  public displayedColumns: string[] = ['id', 'projectCode', 'summary', 'projectManager'];
  public dataSource: MatTableDataSource<Project>;
  public totalSize = 0;

  constructor(private projectservice: ProjectService) {
  }

  ngOnInit() {
    this.getTable();
  }

  private getTable() {
    this.projectservice.getProjects().subscribe((projectTable: Project[]) => {
      this.projectTable = projectTable;
      this.dataSource = new MatTableDataSource(this.projectTable);
      this.totalSize = this.projectTable.length;
    });
  }
}


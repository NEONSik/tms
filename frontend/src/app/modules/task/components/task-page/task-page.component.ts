import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../../services/task.service';
import {Task} from '../../model/task';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Comments} from '../../../../models/comment';
import {CommentService} from '../../../../services/comment.service';
import {User} from '../../../user/model/user';
import {ParseToken} from '../../../../models/parse-token';
import {TransitEventsService} from '../../../../services/transit-events.service';
import {EditProjectComponent} from '../../../project/components/edit-project/edit-project.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {EditTaskComponent} from '../edit-task/edit-task.component';
import {Project} from '../../../project/model/project';
import {typeofExpr} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  taskId: number;
  commentForm: FormGroup;
  token: string;
  strings: string[];
  comments: Comments[];
  taskPage: Task = new Task();
  reporterOfProject: User = new User();
  assigneeOfProject: User = new User();
  newComment: Comments = new Comments();
  parsedToken: ParseToken = new ParseToken();

  constructor(private commentService: CommentService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog,
              private taskService: TaskService,
              private activateRoute: ActivatedRoute,
              private router: Router, private transitEventsService: TransitEventsService) {
  }

  ngOnInit() {
    this.taskId = this.activateRoute.snapshot.params['id'];
    this.taskService.getTask(this.taskId).subscribe((data: Task) => {
      this.taskPage = data;
      this.reporterOfProject.name = data.reporter.name;
      this.assigneeOfProject.name = data.assignee.name;
    });
    this.transitEventsService.myMethod$.subscribe((dataEventsOfComments) => {
      this.getAllComments();
    });
    this.transitEventsService.myMethod$.subscribe((event) => {
      this.taskService.getTask(this.taskId).subscribe((dataChanger: Task) => {
        this.taskPage = dataChanger;
        this.reporterOfProject.name = dataChanger.reporter.name;
        this.assigneeOfProject.name = dataChanger.assignee.name;
      });
    });
    this.commentForm = this.formBuilder.group({
      userId: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.maxLength(30)]],

    });
    this.token = localStorage.getItem('token');
    this.strings = this.token.split('.');
    const payload = JSON.parse(atob(this.strings[1]));
    this.parsedToken.sub = payload.sub;
    this.parsedToken.scopes = payload.scopes;
    this.parsedToken.id = payload.id;
    this.commentService.getAllComments(this.taskId).subscribe((commentsData: Comments[]) => {
      this.comments = commentsData;
    });
  }

  navigateToHomePage(): void {
    this.router.navigate(['home']);
  }

  editTask() {
    this.dialog.open(EditTaskComponent);
  }

  deleteComment(id: number) {
    this.commentService.deleteComment(id).subscribe(() => {
      this.getAllComments();
    });
  }

  getAllComments() {
    this.commentService.getAllComments(this.taskId).subscribe((commentsData: Comments[]) => {
      this.comments = commentsData;
    });
  }

  addComment() {
    this.newComment.content = this.commentForm.controls.content.value;
    this.newComment.task = new Task();
    this.newComment.task.id = this.taskPage.id;
    this.newComment.user = new User();
    this.newComment.user.id = this.parsedToken.id;
    this.commentService.createComment(this.newComment).subscribe(() => {
      this.transitEventsService.myMethod(true);
    });
  }


}

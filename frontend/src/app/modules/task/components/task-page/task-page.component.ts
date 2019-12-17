import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../../services/task.service';
import {Task} from '../../model/task';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {Project} from '../../../project/model/project';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Comments} from '../../../../models/comment';
import {CommentService} from '../../../../services/comment.service';
import {User} from '../../../user/model/user';
import {ParseToken} from '../../../../models/parse-token';

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
  newComment: Comments = new Comments();
  newParseUser: ParseToken = new ParseToken();

  constructor(private commentService: CommentService,
              private formBuilder: FormBuilder,
              private taskService: TaskService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.taskId = this.activateRoute.snapshot.params['id'];
    this.taskService.getTask(this.taskId).subscribe((data: Task) => {
      this.taskPage = data;
    });
    this.commentForm = this.formBuilder.group({
      userId: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.maxLength(30)]],

    });
    this.token = localStorage.getItem('token');
    this.strings = this.token.split('.');
    const payload = JSON.parse(atob(this.strings[1]));
    this.newParseUser.sub = payload.sub;
    this.newParseUser.scopes = payload.scopes;
    this.newParseUser.id = payload.id;
  }

  navigateToHomePage(): void {
    this.router.navigate(['home']);
  }

  editTask() {
    this.router.navigate(['edittask', this.taskId]);
  }

  deleteComment(id: number) {
    this.commentService.deleteComment(id).subscribe(() => {
    });
  }

  getAllComments() {
    this.commentService.getAllComments(this.taskId).subscribe((commentsData: Comments[]) => {
      this.comments = commentsData;
      this.taskId = this.activateRoute.snapshot.params['id'];
      this.taskService.getTask(this.taskId).subscribe((data: Task) => {
        this.taskPage = data;
      });
    });
  }

  addComment() {
    this.newComment.content = this.commentForm.controls.content.value;
    this.newComment.task = new Task();
    this.newComment.task.id = this.taskPage.id;
    this.newComment.user = new User();
    this.newComment.user.id = this.newParseUser.id;
    this.commentService.createComment(this.newComment).subscribe(() => {
    });
  }


}

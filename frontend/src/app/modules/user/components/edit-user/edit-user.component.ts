import {Component, OnInit} from '@angular/core';
import {Page} from '../../../../models/page';
import {Project} from '../../../project/model/project';
import {User} from '../../model/user';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  private userId: number;
  editUserForm: FormGroup;
  editUser: User = new User();

  constructor(private  userservice: UserService, private formbuilder: FormBuilder, private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.userId = this.activateRoute.snapshot.params['id'];
    this.editUserForm = this.formbuilder.group({
      email: ['', [Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      password: ['', [Validators.required, this.noWhitespaceValidator]],
      role: ['', [Validators.required]]
    });
  }
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
  updateUser() {
    this.editUser.email = this.editUserForm.controls.email.value;
    this.editUser.password = this.editUserForm.controls.password.value;
    this.editUser.role = this.editUserForm.controls.role.value;
    this.userservice.updateUser(this.userId, this.editUser).subscribe(success => alert('Done'),
      error => alert(error)
    );
  }

  navigateToHome(): void {
    this.router.navigate(['home']);
  }
}

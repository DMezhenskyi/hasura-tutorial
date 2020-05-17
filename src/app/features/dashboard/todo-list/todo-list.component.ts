import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { TasksGQL, AddTaskGQL, TasksQuery } from 'src/generated/graphql';
import { QueryRef } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  tasks$: Observable<TasksQuery['tasks']>;
  form: FormGroup;
  queryRef: QueryRef<TasksQuery>;

  constructor(
    private tasksGQL: TasksGQL,
    private fb: FormBuilder,
    private addTaskGQL: AddTaskGQL,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      authorId: new FormControl(
        '0df9d120-9c4a-4dd6-979d-1fcbd32dc8a5',
        Validators.required
      ),
    });
    this.queryRef = this.tasksGQL.watch();
    this.tasks$ = this.queryRef.valueChanges.pipe(
      map((result) => result.data.tasks)
    );
  }

  onAddTask() {
    this.addTaskGQL.mutate(this.form.value).subscribe(
      () => {
        this.form.controls.title.reset('');
        this.form.controls.description.reset('');
        this.queryRef.refetch();
      },
      (error) => console.error('Error: ', error)
    );
  }

  onLogout() {
    this.auth.signOut().then(() => this.router.navigate(['login']));
  }
}

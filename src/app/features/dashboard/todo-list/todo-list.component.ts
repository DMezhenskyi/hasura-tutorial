import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { TasksGQL, AddTaskGQL, TasksQuery } from 'src/generated/graphql';
import { QueryRef } from 'apollo-angular';
import { map, switchMap } from 'rxjs/operators';
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
    });
    this.queryRef = this.tasksGQL.watch();
    this.tasks$ = this.queryRef.valueChanges.pipe(
      map((result) => result.data.tasks)
    );
  }

  onAddTask() {
    from(this.auth.currentUser)
      .pipe(
        switchMap(({ uid: authorId }) =>
          this.addTaskGQL.mutate({ ...this.form.value, authorId })
        )
      )
      .subscribe(
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

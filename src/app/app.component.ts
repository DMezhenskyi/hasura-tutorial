import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

interface Task {
  uuid: string;
  title: string;
  description: string;
  user: User;
}

interface User {
  uuid: string;
  displayName: string;
}
interface Response {
  tasks: Task[];
}
const GET_TASKS = gql`
  query Tasks {
    tasks {
      uuid
      title
      description
      user {
        fullName
        uuid
      }
    }
  }
`;
const ADD_TASK = gql`
  mutation AddTask($authorId: uuid!, $description: String!, $title: name!) {
    insert_tasks(
      objects: { authorId: $authorId, description: $description, title: $title }
    ) {
      returning {
        description
        title
        user {
          fullName
          uuid
        }
        uuid
      }
    }
  }
`;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hasura-tutorial';

  tasks$: Observable<Task[]>;
  form: FormGroup;
  queryRef: QueryRef<Response>;

  constructor(private apollo: Apollo, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      authorId: new FormControl(
        '0df9d120-9c4a-4dd6-979d-1fcbd32dc8a5',
        Validators.required
      ),
    });
    this.queryRef = this.apollo.watchQuery<Response>({
      query: GET_TASKS,
    });
    this.tasks$ = this.queryRef.valueChanges.pipe(
      map((result) => result.data.tasks)
    );
  }

  onAddTask() {
    this.apollo
      .mutate({
        mutation: ADD_TASK,
        variables: this.form.value,
      })
      .subscribe(
        () => {
          this.form.controls.title.reset('');
          this.form.controls.description.reset('');
          this.queryRef.refetch();
        },
        (error) => console.error('Error: ', error)
      );
  }
}

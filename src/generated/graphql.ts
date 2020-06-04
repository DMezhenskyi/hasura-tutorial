import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  name: any;
  uuid: any;
}



/** mutation root */
export interface MutationRoot {
   __typename?: 'mutation_root';
  /** delete data from the table: "tasks" */
  delete_tasks?: Maybe<TasksMutationResponse>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** insert data into the table: "tasks" */
  insert_tasks?: Maybe<TasksMutationResponse>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** update data of the table: "tasks" */
  update_tasks?: Maybe<TasksMutationResponse>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
}


/** mutation root */
export interface MutationRootDeleteTasksArgs {
  where: TasksBoolExp;
}


/** mutation root */
export interface MutationRootDeleteUsersArgs {
  where: UsersBoolExp;
}


/** mutation root */
export interface MutationRootInsertTasksArgs {
  objects: Array<TasksInsertInput>;
  on_conflict?: Maybe<TasksOnConflict>;
}


/** mutation root */
export interface MutationRootInsertUsersArgs {
  objects: Array<UsersInsertInput>;
  on_conflict?: Maybe<UsersOnConflict>;
}


/** mutation root */
export interface MutationRootUpdateTasksArgs {
  _set?: Maybe<TasksSetInput>;
  where: TasksBoolExp;
}


/** mutation root */
export interface MutationRootUpdateUsersArgs {
  _set?: Maybe<UsersSetInput>;
  where: UsersBoolExp;
}


/** expression to compare columns of type name. All fields are combined with logical 'AND'. */
export interface NameComparisonExp {
  _eq?: Maybe<Scalars['name']>;
  _gt?: Maybe<Scalars['name']>;
  _gte?: Maybe<Scalars['name']>;
  _in?: Maybe<Array<Scalars['name']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['name']>;
  _lte?: Maybe<Scalars['name']>;
  _neq?: Maybe<Scalars['name']>;
  _nin?: Maybe<Array<Scalars['name']>>;
}

/** column ordering options */
export enum OrderBy {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export interface QueryRoot {
   __typename?: 'query_root';
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** fetch aggregated fields from the table: "tasks" */
  tasks_aggregate: TasksAggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
}


/** query root */
export interface QueryRootTasksArgs {
  distinct_on?: Maybe<Array<TasksSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TasksOrderBy>>;
  where?: Maybe<TasksBoolExp>;
}


/** query root */
export interface QueryRootTasksAggregateArgs {
  distinct_on?: Maybe<Array<TasksSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TasksOrderBy>>;
  where?: Maybe<TasksBoolExp>;
}


/** query root */
export interface QueryRootTasksByPkArgs {
  uuid: Scalars['uuid'];
}


/** query root */
export interface QueryRootUsersArgs {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
}


/** query root */
export interface QueryRootUsersAggregateArgs {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
}


/** query root */
export interface QueryRootUsersByPkArgs {
  uuid: Scalars['String'];
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export interface StringComparisonExp {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
}

/** subscription root */
export interface SubscriptionRoot {
   __typename?: 'subscription_root';
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** fetch aggregated fields from the table: "tasks" */
  tasks_aggregate: TasksAggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
}


/** subscription root */
export interface SubscriptionRootTasksArgs {
  distinct_on?: Maybe<Array<TasksSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TasksOrderBy>>;
  where?: Maybe<TasksBoolExp>;
}


/** subscription root */
export interface SubscriptionRootTasksAggregateArgs {
  distinct_on?: Maybe<Array<TasksSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TasksOrderBy>>;
  where?: Maybe<TasksBoolExp>;
}


/** subscription root */
export interface SubscriptionRootTasksByPkArgs {
  uuid: Scalars['uuid'];
}


/** subscription root */
export interface SubscriptionRootUsersArgs {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
}


/** subscription root */
export interface SubscriptionRootUsersAggregateArgs {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
}


/** subscription root */
export interface SubscriptionRootUsersByPkArgs {
  uuid: Scalars['String'];
}

/** columns and relationships of "tasks" */
export interface Tasks {
   __typename?: 'tasks';
  authorId: Scalars['String'];
  description: Scalars['String'];
  title: Scalars['name'];
  /** An object relationship */
  user: Users;
  uuid: Scalars['uuid'];
}

/** aggregated selection of "tasks" */
export interface TasksAggregate {
   __typename?: 'tasks_aggregate';
  aggregate?: Maybe<TasksAggregateFields>;
  nodes: Array<Tasks>;
}

/** aggregate fields of "tasks" */
export interface TasksAggregateFields {
   __typename?: 'tasks_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<TasksMaxFields>;
  min?: Maybe<TasksMinFields>;
}


/** aggregate fields of "tasks" */
export interface TasksAggregateFieldsCountArgs {
  columns?: Maybe<Array<TasksSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "tasks" */
export interface TasksAggregateOrderBy {
  count?: Maybe<OrderBy>;
  max?: Maybe<TasksMaxOrderBy>;
  min?: Maybe<TasksMinOrderBy>;
}

/** input type for inserting array relation for remote table "tasks" */
export interface TasksArrRelInsertInput {
  data: Array<TasksInsertInput>;
  on_conflict?: Maybe<TasksOnConflict>;
}

/** Boolean expression to filter rows from the table "tasks". All fields are combined with a logical 'AND'. */
export interface TasksBoolExp {
  _and?: Maybe<Array<Maybe<TasksBoolExp>>>;
  _not?: Maybe<TasksBoolExp>;
  _or?: Maybe<Array<Maybe<TasksBoolExp>>>;
  authorId?: Maybe<StringComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  title?: Maybe<NameComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  uuid?: Maybe<UuidComparisonExp>;
}

/** unique or primary key constraints on table "tasks" */
export enum TasksConstraint {
  /** unique or primary key constraint */
  TasksPkey = 'tasks_pkey'
}

/** input type for inserting data into table "tasks" */
export interface TasksInsertInput {
  authorId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['name']>;
  user?: Maybe<UsersObjRelInsertInput>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** aggregate max on columns */
export interface TasksMaxFields {
   __typename?: 'tasks_max_fields';
  authorId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}

/** order by max() on columns of table "tasks" */
export interface TasksMaxOrderBy {
  authorId?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
}

/** aggregate min on columns */
export interface TasksMinFields {
   __typename?: 'tasks_min_fields';
  authorId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}

/** order by min() on columns of table "tasks" */
export interface TasksMinOrderBy {
  authorId?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
}

/** response of any mutation on the table "tasks" */
export interface TasksMutationResponse {
   __typename?: 'tasks_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Tasks>;
}

/** input type for inserting object relation for remote table "tasks" */
export interface TasksObjRelInsertInput {
  data: TasksInsertInput;
  on_conflict?: Maybe<TasksOnConflict>;
}

/** on conflict condition type for table "tasks" */
export interface TasksOnConflict {
  constraint: TasksConstraint;
  update_columns: Array<TasksUpdateColumn>;
  where?: Maybe<TasksBoolExp>;
}

/** ordering options when selecting data from "tasks" */
export interface TasksOrderBy {
  authorId?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  uuid?: Maybe<OrderBy>;
}

/** select columns of table "tasks" */
export enum TasksSelectColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Description = 'description',
  /** column name */
  Title = 'title',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "tasks" */
export interface TasksSetInput {
  authorId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['name']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** update columns of table "tasks" */
export enum TasksUpdateColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Description = 'description',
  /** column name */
  Title = 'title',
  /** column name */
  Uuid = 'uuid'
}

/** columns and relationships of "users" */
export interface Users {
   __typename?: 'users';
  fullName: Scalars['name'];
  uuid: Scalars['String'];
}

/** aggregated selection of "users" */
export interface UsersAggregate {
   __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
}

/** aggregate fields of "users" */
export interface UsersAggregateFields {
   __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
}


/** aggregate fields of "users" */
export interface UsersAggregateFieldsCountArgs {
  columns?: Maybe<Array<UsersSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "users" */
export interface UsersAggregateOrderBy {
  count?: Maybe<OrderBy>;
  max?: Maybe<UsersMaxOrderBy>;
  min?: Maybe<UsersMinOrderBy>;
}

/** input type for inserting array relation for remote table "users" */
export interface UsersArrRelInsertInput {
  data: Array<UsersInsertInput>;
  on_conflict?: Maybe<UsersOnConflict>;
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface UsersBoolExp {
  _and?: Maybe<Array<Maybe<UsersBoolExp>>>;
  _not?: Maybe<UsersBoolExp>;
  _or?: Maybe<Array<Maybe<UsersBoolExp>>>;
  fullName?: Maybe<NameComparisonExp>;
  uuid?: Maybe<StringComparisonExp>;
}

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint */
  UsersUuidKey = 'users_uuid_key'
}

/** input type for inserting data into table "users" */
export interface UsersInsertInput {
  fullName?: Maybe<Scalars['name']>;
  uuid?: Maybe<Scalars['String']>;
}

/** aggregate max on columns */
export interface UsersMaxFields {
   __typename?: 'users_max_fields';
  uuid?: Maybe<Scalars['String']>;
}

/** order by max() on columns of table "users" */
export interface UsersMaxOrderBy {
  uuid?: Maybe<OrderBy>;
}

/** aggregate min on columns */
export interface UsersMinFields {
   __typename?: 'users_min_fields';
  uuid?: Maybe<Scalars['String']>;
}

/** order by min() on columns of table "users" */
export interface UsersMinOrderBy {
  uuid?: Maybe<OrderBy>;
}

/** response of any mutation on the table "users" */
export interface UsersMutationResponse {
   __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
}

/** input type for inserting object relation for remote table "users" */
export interface UsersObjRelInsertInput {
  data: UsersInsertInput;
  on_conflict?: Maybe<UsersOnConflict>;
}

/** on conflict condition type for table "users" */
export interface UsersOnConflict {
  constraint: UsersConstraint;
  update_columns: Array<UsersUpdateColumn>;
  where?: Maybe<UsersBoolExp>;
}

/** ordering options when selecting data from "users" */
export interface UsersOrderBy {
  fullName?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
}

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  FullName = 'fullName',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "users" */
export interface UsersSetInput {
  fullName?: Maybe<Scalars['name']>;
  uuid?: Maybe<Scalars['String']>;
}

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  FullName = 'fullName',
  /** column name */
  Uuid = 'uuid'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export interface UuidComparisonExp {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
}

export type TasksQueryVariables = {};


export type TasksQuery = (
  { __typename?: 'query_root' }
  & { tasks: Array<(
    { __typename?: 'tasks' }
    & Pick<Tasks, 'uuid' | 'title' | 'description'>
    & { user: (
      { __typename?: 'users' }
      & Pick<Users, 'fullName' | 'uuid'>
    ) }
  )> }
);

export type AddTaskMutationVariables = {
  authorId: Scalars['String'];
  description: Scalars['String'];
  title: Scalars['name'];
};


export type AddTaskMutation = (
  { __typename?: 'mutation_root' }
  & { insert_tasks?: Maybe<(
    { __typename?: 'tasks_mutation_response' }
    & { returning: Array<(
      { __typename?: 'tasks' }
      & Pick<Tasks, 'description' | 'title' | 'uuid'>
      & { user: (
        { __typename?: 'users' }
        & Pick<Users, 'fullName' | 'uuid'>
      ) }
    )> }
  )> }
);

export type CreateUserMutationVariables = {
  uuid: Scalars['String'];
  fullName: Scalars['name'];
};


export type CreateUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users?: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<UsersMutationResponse, 'affected_rows'>
  )> }
);

export const TasksDocument = gql`
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

  @Injectable({
    providedIn: 'root'
  })
  export class TasksGQL extends Apollo.Query<TasksQuery, TasksQueryVariables> {
    document = TasksDocument;
    
  }
export const AddTaskDocument = gql`
    mutation AddTask($authorId: String!, $description: String!, $title: name!) {
  insert_tasks(objects: {authorId: $authorId, description: $description, title: $title}) {
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

  @Injectable({
    providedIn: 'root'
  })
  export class AddTaskGQL extends Apollo.Mutation<AddTaskMutation, AddTaskMutationVariables> {
    document = AddTaskDocument;
    
  }
export const CreateUserDocument = gql`
    mutation CreateUser($uuid: String!, $fullName: name!) {
  insert_users(objects: {fullName: $fullName, uuid: $uuid}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
  }
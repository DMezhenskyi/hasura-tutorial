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
  timestamptz: any;
  uuid: any;
  json: any;
}



/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export interface BooleanComparisonExp {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export interface IntComparisonExp {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
}


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export interface JsonComparisonExp {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
}

/** mutation root */
export interface MutationRoot {
   __typename?: 'mutation_root';
  /** perform the action: "buyit" */
  buyit?: Maybe<StripeResponse>;
  /** delete data from the table: "task_status" */
  delete_task_status?: Maybe<TaskStatusMutationResponse>;
  /** delete single row from the table: "task_status" */
  delete_task_status_by_pk?: Maybe<TaskStatus>;
  /** delete data from the table: "tasks" */
  delete_tasks?: Maybe<TasksMutationResponse>;
  /** delete single row from the table: "tasks" */
  delete_tasks_by_pk?: Maybe<Tasks>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "task_status" */
  insert_task_status?: Maybe<TaskStatusMutationResponse>;
  /** insert a single row into the table: "task_status" */
  insert_task_status_one?: Maybe<TaskStatus>;
  /** insert data into the table: "tasks" */
  insert_tasks?: Maybe<TasksMutationResponse>;
  /** insert a single row into the table: "tasks" */
  insert_tasks_one?: Maybe<Tasks>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "task_status" */
  update_task_status?: Maybe<TaskStatusMutationResponse>;
  /** update single row of the table: "task_status" */
  update_task_status_by_pk?: Maybe<TaskStatus>;
  /** update data of the table: "tasks" */
  update_tasks?: Maybe<TasksMutationResponse>;
  /** update single row of the table: "tasks" */
  update_tasks_by_pk?: Maybe<Tasks>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
}


/** mutation root */
export interface MutationRootBuyitArgs {
  arg1: SampleInput;
}


/** mutation root */
export interface MutationRootDeleteTaskStatusArgs {
  where: TaskStatusBoolExp;
}


/** mutation root */
export interface MutationRootDeleteTaskStatusByPkArgs {
  id: Scalars['Int'];
}


/** mutation root */
export interface MutationRootDeleteTasksArgs {
  where: TasksBoolExp;
}


/** mutation root */
export interface MutationRootDeleteTasksByPkArgs {
  uuid: Scalars['uuid'];
}


/** mutation root */
export interface MutationRootDeleteUsersArgs {
  where: UsersBoolExp;
}


/** mutation root */
export interface MutationRootDeleteUsersByPkArgs {
  uuid: Scalars['String'];
}


/** mutation root */
export interface MutationRootInsertTaskStatusArgs {
  objects: Array<TaskStatusInsertInput>;
  on_conflict?: Maybe<TaskStatusOnConflict>;
}


/** mutation root */
export interface MutationRootInsertTaskStatusOneArgs {
  object: TaskStatusInsertInput;
  on_conflict?: Maybe<TaskStatusOnConflict>;
}


/** mutation root */
export interface MutationRootInsertTasksArgs {
  objects: Array<TasksInsertInput>;
  on_conflict?: Maybe<TasksOnConflict>;
}


/** mutation root */
export interface MutationRootInsertTasksOneArgs {
  object: TasksInsertInput;
  on_conflict?: Maybe<TasksOnConflict>;
}


/** mutation root */
export interface MutationRootInsertUsersArgs {
  objects: Array<UsersInsertInput>;
  on_conflict?: Maybe<UsersOnConflict>;
}


/** mutation root */
export interface MutationRootInsertUsersOneArgs {
  object: UsersInsertInput;
  on_conflict?: Maybe<UsersOnConflict>;
}


/** mutation root */
export interface MutationRootUpdateTaskStatusArgs {
  _inc?: Maybe<TaskStatusIncInput>;
  _set?: Maybe<TaskStatusSetInput>;
  where: TaskStatusBoolExp;
}


/** mutation root */
export interface MutationRootUpdateTaskStatusByPkArgs {
  _inc?: Maybe<TaskStatusIncInput>;
  _set?: Maybe<TaskStatusSetInput>;
  pk_columns: TaskStatusPkColumnsInput;
}


/** mutation root */
export interface MutationRootUpdateTasksArgs {
  _inc?: Maybe<TasksIncInput>;
  _set?: Maybe<TasksSetInput>;
  where: TasksBoolExp;
}


/** mutation root */
export interface MutationRootUpdateTasksByPkArgs {
  _inc?: Maybe<TasksIncInput>;
  _set?: Maybe<TasksSetInput>;
  pk_columns: TasksPkColumnsInput;
}


/** mutation root */
export interface MutationRootUpdateUsersArgs {
  _inc?: Maybe<UsersIncInput>;
  _set?: Maybe<UsersSetInput>;
  where: UsersBoolExp;
}


/** mutation root */
export interface MutationRootUpdateUsersByPkArgs {
  _inc?: Maybe<UsersIncInput>;
  _set?: Maybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
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
  /** perform the action: "getUser" */
  getUser?: Maybe<UserProfile>;
  /** fetch data from the table: "task_status" */
  task_status: Array<TaskStatus>;
  /** fetch aggregated fields from the table: "task_status" */
  task_status_aggregate: TaskStatusAggregate;
  /** fetch data from the table: "task_status" using primary key columns */
  task_status_by_pk?: Maybe<TaskStatus>;
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
export interface QueryRootGetUserArgs {
  uuid: Scalars['String'];
}


/** query root */
export interface QueryRootTaskStatusArgs {
  distinct_on?: Maybe<Array<TaskStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TaskStatusOrderBy>>;
  where?: Maybe<TaskStatusBoolExp>;
}


/** query root */
export interface QueryRootTaskStatusAggregateArgs {
  distinct_on?: Maybe<Array<TaskStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TaskStatusOrderBy>>;
  where?: Maybe<TaskStatusBoolExp>;
}


/** query root */
export interface QueryRootTaskStatusByPkArgs {
  id: Scalars['Int'];
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

export interface SampleInput {
  itemId: Scalars['String'];
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

export interface StripeResponse {
   __typename?: 'StripeResponse';
  field1: Scalars['String'];
}

/** subscription root */
export interface SubscriptionRoot {
   __typename?: 'subscription_root';
  /** perform the action: "getUser" */
  getUser?: Maybe<UserProfile>;
  /** fetch data from the table: "task_status" */
  task_status: Array<TaskStatus>;
  /** fetch aggregated fields from the table: "task_status" */
  task_status_aggregate: TaskStatusAggregate;
  /** fetch data from the table: "task_status" using primary key columns */
  task_status_by_pk?: Maybe<TaskStatus>;
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
export interface SubscriptionRootGetUserArgs {
  uuid: Scalars['String'];
}


/** subscription root */
export interface SubscriptionRootTaskStatusArgs {
  distinct_on?: Maybe<Array<TaskStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TaskStatusOrderBy>>;
  where?: Maybe<TaskStatusBoolExp>;
}


/** subscription root */
export interface SubscriptionRootTaskStatusAggregateArgs {
  distinct_on?: Maybe<Array<TaskStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TaskStatusOrderBy>>;
  where?: Maybe<TaskStatusBoolExp>;
}


/** subscription root */
export interface SubscriptionRootTaskStatusByPkArgs {
  id: Scalars['Int'];
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

/** columns and relationships of "task_status" */
export interface TaskStatus {
   __typename?: 'task_status';
  id: Scalars['Int'];
  name: Scalars['String'];
}

/** aggregated selection of "task_status" */
export interface TaskStatusAggregate {
   __typename?: 'task_status_aggregate';
  aggregate?: Maybe<TaskStatusAggregateFields>;
  nodes: Array<TaskStatus>;
}

/** aggregate fields of "task_status" */
export interface TaskStatusAggregateFields {
   __typename?: 'task_status_aggregate_fields';
  avg?: Maybe<TaskStatusAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<TaskStatusMaxFields>;
  min?: Maybe<TaskStatusMinFields>;
  stddev?: Maybe<TaskStatusStddevFields>;
  stddev_pop?: Maybe<TaskStatusStddevPopFields>;
  stddev_samp?: Maybe<TaskStatusStddevSampFields>;
  sum?: Maybe<TaskStatusSumFields>;
  var_pop?: Maybe<TaskStatusVarPopFields>;
  var_samp?: Maybe<TaskStatusVarSampFields>;
  variance?: Maybe<TaskStatusVarianceFields>;
}


/** aggregate fields of "task_status" */
export interface TaskStatusAggregateFieldsCountArgs {
  columns?: Maybe<Array<TaskStatusSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "task_status" */
export interface TaskStatusAggregateOrderBy {
  avg?: Maybe<TaskStatusAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<TaskStatusMaxOrderBy>;
  min?: Maybe<TaskStatusMinOrderBy>;
  stddev?: Maybe<TaskStatusStddevOrderBy>;
  stddev_pop?: Maybe<TaskStatusStddevPopOrderBy>;
  stddev_samp?: Maybe<TaskStatusStddevSampOrderBy>;
  sum?: Maybe<TaskStatusSumOrderBy>;
  var_pop?: Maybe<TaskStatusVarPopOrderBy>;
  var_samp?: Maybe<TaskStatusVarSampOrderBy>;
  variance?: Maybe<TaskStatusVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "task_status" */
export interface TaskStatusArrRelInsertInput {
  data: Array<TaskStatusInsertInput>;
  on_conflict?: Maybe<TaskStatusOnConflict>;
}

/** aggregate avg on columns */
export interface TaskStatusAvgFields {
   __typename?: 'task_status_avg_fields';
  id?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "task_status" */
export interface TaskStatusAvgOrderBy {
  id?: Maybe<OrderBy>;
}

/** Boolean expression to filter rows from the table "task_status". All fields are combined with a logical 'AND'. */
export interface TaskStatusBoolExp {
  _and?: Maybe<Array<Maybe<TaskStatusBoolExp>>>;
  _not?: Maybe<TaskStatusBoolExp>;
  _or?: Maybe<Array<Maybe<TaskStatusBoolExp>>>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
}

/** unique or primary key constraints on table "task_status" */
export enum TaskStatusConstraint {
  /** unique or primary key constraint */
  TaskStatusPkey = 'task_status_pkey'
}

/** input type for incrementing integer column in table "task_status" */
export interface TaskStatusIncInput {
  id?: Maybe<Scalars['Int']>;
}

/** input type for inserting data into table "task_status" */
export interface TaskStatusInsertInput {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}

/** aggregate max on columns */
export interface TaskStatusMaxFields {
   __typename?: 'task_status_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}

/** order by max() on columns of table "task_status" */
export interface TaskStatusMaxOrderBy {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
}

/** aggregate min on columns */
export interface TaskStatusMinFields {
   __typename?: 'task_status_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}

/** order by min() on columns of table "task_status" */
export interface TaskStatusMinOrderBy {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
}

/** response of any mutation on the table "task_status" */
export interface TaskStatusMutationResponse {
   __typename?: 'task_status_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TaskStatus>;
}

/** input type for inserting object relation for remote table "task_status" */
export interface TaskStatusObjRelInsertInput {
  data: TaskStatusInsertInput;
  on_conflict?: Maybe<TaskStatusOnConflict>;
}

/** on conflict condition type for table "task_status" */
export interface TaskStatusOnConflict {
  constraint: TaskStatusConstraint;
  update_columns: Array<TaskStatusUpdateColumn>;
  where?: Maybe<TaskStatusBoolExp>;
}

/** ordering options when selecting data from "task_status" */
export interface TaskStatusOrderBy {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
}

/** primary key columns input for table: "task_status" */
export interface TaskStatusPkColumnsInput {
  id: Scalars['Int'];
}

/** select columns of table "task_status" */
export enum TaskStatusSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "task_status" */
export interface TaskStatusSetInput {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}

/** aggregate stddev on columns */
export interface TaskStatusStddevFields {
   __typename?: 'task_status_stddev_fields';
  id?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "task_status" */
export interface TaskStatusStddevOrderBy {
  id?: Maybe<OrderBy>;
}

/** aggregate stddev_pop on columns */
export interface TaskStatusStddevPopFields {
   __typename?: 'task_status_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "task_status" */
export interface TaskStatusStddevPopOrderBy {
  id?: Maybe<OrderBy>;
}

/** aggregate stddev_samp on columns */
export interface TaskStatusStddevSampFields {
   __typename?: 'task_status_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "task_status" */
export interface TaskStatusStddevSampOrderBy {
  id?: Maybe<OrderBy>;
}

/** aggregate sum on columns */
export interface TaskStatusSumFields {
   __typename?: 'task_status_sum_fields';
  id?: Maybe<Scalars['Int']>;
}

/** order by sum() on columns of table "task_status" */
export interface TaskStatusSumOrderBy {
  id?: Maybe<OrderBy>;
}

/** update columns of table "task_status" */
export enum TaskStatusUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export interface TaskStatusVarPopFields {
   __typename?: 'task_status_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "task_status" */
export interface TaskStatusVarPopOrderBy {
  id?: Maybe<OrderBy>;
}

/** aggregate var_samp on columns */
export interface TaskStatusVarSampFields {
   __typename?: 'task_status_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "task_status" */
export interface TaskStatusVarSampOrderBy {
  id?: Maybe<OrderBy>;
}

/** aggregate variance on columns */
export interface TaskStatusVarianceFields {
   __typename?: 'task_status_variance_fields';
  id?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "task_status" */
export interface TaskStatusVarianceOrderBy {
  id?: Maybe<OrderBy>;
}

/** columns and relationships of "tasks" */
export interface Tasks {
   __typename?: 'tasks';
  authorId: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  isCompleted: Scalars['Boolean'];
  listId?: Maybe<Scalars['uuid']>;
  status_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  taskStatus?: Maybe<TaskStatus>;
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
  avg?: Maybe<TasksAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<TasksMaxFields>;
  min?: Maybe<TasksMinFields>;
  stddev?: Maybe<TasksStddevFields>;
  stddev_pop?: Maybe<TasksStddevPopFields>;
  stddev_samp?: Maybe<TasksStddevSampFields>;
  sum?: Maybe<TasksSumFields>;
  var_pop?: Maybe<TasksVarPopFields>;
  var_samp?: Maybe<TasksVarSampFields>;
  variance?: Maybe<TasksVarianceFields>;
}


/** aggregate fields of "tasks" */
export interface TasksAggregateFieldsCountArgs {
  columns?: Maybe<Array<TasksSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "tasks" */
export interface TasksAggregateOrderBy {
  avg?: Maybe<TasksAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<TasksMaxOrderBy>;
  min?: Maybe<TasksMinOrderBy>;
  stddev?: Maybe<TasksStddevOrderBy>;
  stddev_pop?: Maybe<TasksStddevPopOrderBy>;
  stddev_samp?: Maybe<TasksStddevSampOrderBy>;
  sum?: Maybe<TasksSumOrderBy>;
  var_pop?: Maybe<TasksVarPopOrderBy>;
  var_samp?: Maybe<TasksVarSampOrderBy>;
  variance?: Maybe<TasksVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "tasks" */
export interface TasksArrRelInsertInput {
  data: Array<TasksInsertInput>;
  on_conflict?: Maybe<TasksOnConflict>;
}

/** aggregate avg on columns */
export interface TasksAvgFields {
   __typename?: 'tasks_avg_fields';
  status_id?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "tasks" */
export interface TasksAvgOrderBy {
  status_id?: Maybe<OrderBy>;
}

/** Boolean expression to filter rows from the table "tasks". All fields are combined with a logical 'AND'. */
export interface TasksBoolExp {
  _and?: Maybe<Array<Maybe<TasksBoolExp>>>;
  _not?: Maybe<TasksBoolExp>;
  _or?: Maybe<Array<Maybe<TasksBoolExp>>>;
  authorId?: Maybe<StringComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  isCompleted?: Maybe<BooleanComparisonExp>;
  listId?: Maybe<UuidComparisonExp>;
  status_id?: Maybe<IntComparisonExp>;
  taskStatus?: Maybe<TaskStatusBoolExp>;
  title?: Maybe<NameComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  uuid?: Maybe<UuidComparisonExp>;
}

/** unique or primary key constraints on table "tasks" */
export enum TasksConstraint {
  /** unique or primary key constraint */
  TasksPkey = 'tasks_pkey'
}

/** input type for incrementing integer column in table "tasks" */
export interface TasksIncInput {
  status_id?: Maybe<Scalars['Int']>;
}

/** input type for inserting data into table "tasks" */
export interface TasksInsertInput {
  authorId?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  isCompleted?: Maybe<Scalars['Boolean']>;
  listId?: Maybe<Scalars['uuid']>;
  status_id?: Maybe<Scalars['Int']>;
  taskStatus?: Maybe<TaskStatusObjRelInsertInput>;
  title?: Maybe<Scalars['name']>;
  user?: Maybe<UsersObjRelInsertInput>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** aggregate max on columns */
export interface TasksMaxFields {
   __typename?: 'tasks_max_fields';
  authorId?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  listId?: Maybe<Scalars['uuid']>;
  status_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by max() on columns of table "tasks" */
export interface TasksMaxOrderBy {
  authorId?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  listId?: Maybe<OrderBy>;
  status_id?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
}

/** aggregate min on columns */
export interface TasksMinFields {
   __typename?: 'tasks_min_fields';
  authorId?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  listId?: Maybe<Scalars['uuid']>;
  status_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** order by min() on columns of table "tasks" */
export interface TasksMinOrderBy {
  authorId?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  listId?: Maybe<OrderBy>;
  status_id?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
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
  created_at?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  isCompleted?: Maybe<OrderBy>;
  listId?: Maybe<OrderBy>;
  status_id?: Maybe<OrderBy>;
  taskStatus?: Maybe<TaskStatusOrderBy>;
  title?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  uuid?: Maybe<OrderBy>;
}

/** primary key columns input for table: "tasks" */
export interface TasksPkColumnsInput {
  uuid: Scalars['uuid'];
}

/** select columns of table "tasks" */
export enum TasksSelectColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  IsCompleted = 'isCompleted',
  /** column name */
  ListId = 'listId',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  Title = 'title',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "tasks" */
export interface TasksSetInput {
  authorId?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  isCompleted?: Maybe<Scalars['Boolean']>;
  listId?: Maybe<Scalars['uuid']>;
  status_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['name']>;
  uuid?: Maybe<Scalars['uuid']>;
}

/** aggregate stddev on columns */
export interface TasksStddevFields {
   __typename?: 'tasks_stddev_fields';
  status_id?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "tasks" */
export interface TasksStddevOrderBy {
  status_id?: Maybe<OrderBy>;
}

/** aggregate stddev_pop on columns */
export interface TasksStddevPopFields {
   __typename?: 'tasks_stddev_pop_fields';
  status_id?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "tasks" */
export interface TasksStddevPopOrderBy {
  status_id?: Maybe<OrderBy>;
}

/** aggregate stddev_samp on columns */
export interface TasksStddevSampFields {
   __typename?: 'tasks_stddev_samp_fields';
  status_id?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "tasks" */
export interface TasksStddevSampOrderBy {
  status_id?: Maybe<OrderBy>;
}

/** aggregate sum on columns */
export interface TasksSumFields {
   __typename?: 'tasks_sum_fields';
  status_id?: Maybe<Scalars['Int']>;
}

/** order by sum() on columns of table "tasks" */
export interface TasksSumOrderBy {
  status_id?: Maybe<OrderBy>;
}

/** update columns of table "tasks" */
export enum TasksUpdateColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  IsCompleted = 'isCompleted',
  /** column name */
  ListId = 'listId',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  Title = 'title',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export interface TasksVarPopFields {
   __typename?: 'tasks_var_pop_fields';
  status_id?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "tasks" */
export interface TasksVarPopOrderBy {
  status_id?: Maybe<OrderBy>;
}

/** aggregate var_samp on columns */
export interface TasksVarSampFields {
   __typename?: 'tasks_var_samp_fields';
  status_id?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "tasks" */
export interface TasksVarSampOrderBy {
  status_id?: Maybe<OrderBy>;
}

/** aggregate variance on columns */
export interface TasksVarianceFields {
   __typename?: 'tasks_variance_fields';
  status_id?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "tasks" */
export interface TasksVarianceOrderBy {
  status_id?: Maybe<OrderBy>;
}


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export interface TimestamptzComparisonExp {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
}

export interface UserProfile {
   __typename?: 'UserProfile';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  testUser?: Maybe<Users>;
  userTasks?: Maybe<Array<Maybe<Tasks>>>;
  uuid: Scalars['String'];
}

/** columns and relationships of "users" */
export interface Users {
   __typename?: 'users';
  age?: Maybe<Scalars['Int']>;
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
  avg?: Maybe<UsersAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
  stddev?: Maybe<UsersStddevFields>;
  stddev_pop?: Maybe<UsersStddevPopFields>;
  stddev_samp?: Maybe<UsersStddevSampFields>;
  sum?: Maybe<UsersSumFields>;
  var_pop?: Maybe<UsersVarPopFields>;
  var_samp?: Maybe<UsersVarSampFields>;
  variance?: Maybe<UsersVarianceFields>;
}


/** aggregate fields of "users" */
export interface UsersAggregateFieldsCountArgs {
  columns?: Maybe<Array<UsersSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "users" */
export interface UsersAggregateOrderBy {
  avg?: Maybe<UsersAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<UsersMaxOrderBy>;
  min?: Maybe<UsersMinOrderBy>;
  stddev?: Maybe<UsersStddevOrderBy>;
  stddev_pop?: Maybe<UsersStddevPopOrderBy>;
  stddev_samp?: Maybe<UsersStddevSampOrderBy>;
  sum?: Maybe<UsersSumOrderBy>;
  var_pop?: Maybe<UsersVarPopOrderBy>;
  var_samp?: Maybe<UsersVarSampOrderBy>;
  variance?: Maybe<UsersVarianceOrderBy>;
}

/** input type for inserting array relation for remote table "users" */
export interface UsersArrRelInsertInput {
  data: Array<UsersInsertInput>;
  on_conflict?: Maybe<UsersOnConflict>;
}

/** aggregate avg on columns */
export interface UsersAvgFields {
   __typename?: 'users_avg_fields';
  age?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "users" */
export interface UsersAvgOrderBy {
  age?: Maybe<OrderBy>;
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface UsersBoolExp {
  _and?: Maybe<Array<Maybe<UsersBoolExp>>>;
  _not?: Maybe<UsersBoolExp>;
  _or?: Maybe<Array<Maybe<UsersBoolExp>>>;
  age?: Maybe<IntComparisonExp>;
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

/** input type for incrementing integer column in table "users" */
export interface UsersIncInput {
  age?: Maybe<Scalars['Int']>;
}

/** input type for inserting data into table "users" */
export interface UsersInsertInput {
  age?: Maybe<Scalars['Int']>;
  fullName?: Maybe<Scalars['name']>;
  uuid?: Maybe<Scalars['String']>;
}

/** aggregate max on columns */
export interface UsersMaxFields {
   __typename?: 'users_max_fields';
  age?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
}

/** order by max() on columns of table "users" */
export interface UsersMaxOrderBy {
  age?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
}

/** aggregate min on columns */
export interface UsersMinFields {
   __typename?: 'users_min_fields';
  age?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
}

/** order by min() on columns of table "users" */
export interface UsersMinOrderBy {
  age?: Maybe<OrderBy>;
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
  age?: Maybe<OrderBy>;
  fullName?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
}

/** primary key columns input for table: "users" */
export interface UsersPkColumnsInput {
  uuid: Scalars['String'];
}

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  Age = 'age',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "users" */
export interface UsersSetInput {
  age?: Maybe<Scalars['Int']>;
  fullName?: Maybe<Scalars['name']>;
  uuid?: Maybe<Scalars['String']>;
}

/** aggregate stddev on columns */
export interface UsersStddevFields {
   __typename?: 'users_stddev_fields';
  age?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "users" */
export interface UsersStddevOrderBy {
  age?: Maybe<OrderBy>;
}

/** aggregate stddev_pop on columns */
export interface UsersStddevPopFields {
   __typename?: 'users_stddev_pop_fields';
  age?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "users" */
export interface UsersStddevPopOrderBy {
  age?: Maybe<OrderBy>;
}

/** aggregate stddev_samp on columns */
export interface UsersStddevSampFields {
   __typename?: 'users_stddev_samp_fields';
  age?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "users" */
export interface UsersStddevSampOrderBy {
  age?: Maybe<OrderBy>;
}

/** aggregate sum on columns */
export interface UsersSumFields {
   __typename?: 'users_sum_fields';
  age?: Maybe<Scalars['Int']>;
}

/** order by sum() on columns of table "users" */
export interface UsersSumOrderBy {
  age?: Maybe<OrderBy>;
}

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  Age = 'age',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export interface UsersVarPopFields {
   __typename?: 'users_var_pop_fields';
  age?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "users" */
export interface UsersVarPopOrderBy {
  age?: Maybe<OrderBy>;
}

/** aggregate var_samp on columns */
export interface UsersVarSampFields {
   __typename?: 'users_var_samp_fields';
  age?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "users" */
export interface UsersVarSampOrderBy {
  age?: Maybe<OrderBy>;
}

/** aggregate variance on columns */
export interface UsersVarianceFields {
   __typename?: 'users_variance_fields';
  age?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "users" */
export interface UsersVarianceOrderBy {
  age?: Maybe<OrderBy>;
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
    & { taskStatus?: Maybe<(
      { __typename?: 'task_status' }
      & Pick<TaskStatus, 'id' | 'name'>
    )>, user: (
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
    taskStatus {
      id
      name
    }
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
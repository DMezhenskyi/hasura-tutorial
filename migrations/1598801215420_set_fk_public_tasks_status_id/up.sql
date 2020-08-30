alter table "public"."tasks"
           add constraint "tasks_status_id_fkey"
           foreign key ("status_id")
           references "public"."task_status"
           ("id") on update restrict on delete restrict;

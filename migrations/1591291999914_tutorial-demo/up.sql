
ALTER TABLE "public"."users" ADD COLUMN "age" integer NULL;

ALTER TABLE "public"."tasks" ADD COLUMN "listId" uuid NULL;

ALTER TABLE "public"."tasks" ADD COLUMN "created_at" timestamptz NULL DEFAULT now();

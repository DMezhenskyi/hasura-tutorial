CREATE TABLE public.tasks (
    uuid uuid DEFAULT public.gen_random_uuid() NOT NULL,
    title name NOT NULL,
    description text NOT NULL,
    "authorId" text NOT NULL,
    "isCompleted" boolean DEFAULT false NOT NULL
);
CREATE TABLE public.users (
    uuid text DEFAULT public.gen_random_uuid() NOT NULL,
    "fullName" name NOT NULL
);
ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_pkey PRIMARY KEY (uuid);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (uuid);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_uuid_key UNIQUE (uuid);
ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT "tasks_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public.users(uuid) ON UPDATE RESTRICT ON DELETE RESTRICT;

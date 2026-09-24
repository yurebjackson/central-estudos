-- CENTRAL DE ESTUDOS V4
-- Execute UMA VEZ no SQL Editor do Supabase antes de publicar a versão 4.
-- Os dados existentes serão mantidos e associados à disciplina de Ética.

begin;

alter table public.study_progress
  add column if not exists subject text;

update public.study_progress
set subject = 'etica'
where subject is null;

alter table public.study_progress
  alter column subject set default 'etica',
  alter column subject set not null;

alter table public.study_progress
  drop constraint if exists study_progress_pkey;

alter table public.study_progress
  add constraint study_progress_pkey primary key (user_id, subject, day);

alter table public.study_notes
  add column if not exists subject text;

update public.study_notes
set subject = 'etica'
where subject is null;

alter table public.study_notes
  alter column subject set default 'etica',
  alter column subject set not null;

alter table public.study_notes
  drop constraint if exists study_notes_pkey;

alter table public.study_notes
  add constraint study_notes_pkey primary key (user_id, subject);

alter table public.quiz_results
  add column if not exists subject text;

update public.quiz_results
set subject = 'etica'
where subject is null;

alter table public.quiz_results
  alter column subject set default 'etica',
  alter column subject set not null;

create index if not exists quiz_results_user_subject_created_idx
  on public.quiz_results (user_id, subject, created_at desc);

grant select, insert, update, delete on public.study_progress to authenticated;
grant select, insert, update, delete on public.study_notes to authenticated;
grant select, insert, delete on public.quiz_results to authenticated;
grant usage, select on sequence public.quiz_results_id_seq to authenticated;

commit;

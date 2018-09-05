INSERT INTO skills (title, category)
VALUES ("sewing", "crafting");

INSERT INTO skills (title, category)
VALUES ("woodworking", "carpentry");

INSERT INTO skills (title, category)
VALUES ("painting", "artistry");

INSERT INTO skills (title, category)
VALUES ("leathworking", "crafting");

INSERT INTO skills (title, category)
VALUES ("sculpting", "artistry");

INSERT INTO skills (title, category)
VALUES ("drawing", "artistry");

INSERT INTO skills (title, category)
VALUES ("modeling", "crafting");

INSERT INTO skills (title, category)
VALUES ("engine work", "mechanical");

INSERT INTO skills (title, category)
VALUES ("3D printing", "mechanical");

INSERT INTO skills (title, category)
VALUES ("photography", "artistry");

INSERT INTO skills (title, category)
VALUES ("airbrush", "artistry");

INSERT INTO skills (title, category)
VALUES ("spraypaint", "artistry");

## users

INSERT INTO users (username, email, password)
VALUES ("bobman", "bob@bob.com", "bobstheman1");

INSERT INTO users (username, email, password)
VALUES ("johnman", "john@john.com", "johnstheman1");

INSERT INTO users (username, email, password)
VALUES ("sarahgirl", "sarah@sarah.com", "sarahsthegirl1");

INSERT INTO users (username, email, password)
VALUES ("janegirl", "jane@jane.com", "janesthegirl1");

INSERT INTO users (username, email, password)
VALUES ("robman", "rob@rob.com", "robstheman1");

INSERT INTO users (username, email, password)
VALUES ("joangirl", "joan@joan.com", "joansthegirl1");

## users_skills

INSERT INTO users_skills (SkillId, UserId)
VALUES (3, 1);

INSERT INTO users_skills (SkillId, UserId)
VALUES (6, 1);

INSERT INTO users_skills (SkillId, UserId)
VALUES (7, 2);

INSERT INTO users_skills (SkillId, UserId)
VALUES (9, 2);

INSERT INTO users_skills (SkillId, UserId)
VALUES (11, 2);

INSERT INTO users_skills (SkillId, UserId)
VALUES (10, 3);

INSERT INTO users_skills (SkillId, UserId)
VALUES (12, 3);

INSERT INTO users_skills (SkillId, UserId)
VALUES (5, 3);

INSERT INTO users_skills (SkillId, UserId)
VALUES (2, 4);

INSERT INTO users_skills (SkillId, UserId)
VALUES (8, 4);

INSERT INTO users_skills (SkillId, UserId)
VALUES (4, 4);

INSERT INTO users_skills (SkillId, UserId)
VALUES (1, 5);

INSERT INTO users_skills (SkillId, UserId)
VALUES (10, 5);

INSERT INTO users_skills (SkillId, UserId)
VALUES (9, 5);

INSERT INTO users_skills (SkillId, UserId)
VALUES (8, 6);

INSERT INTO users_skills (SkillId, UserId)
VALUES (12, 6);

INSERT INTO users_skills (SkillId, UserId)
VALUES (11, 6);

## projects

INSERT INTO projects (title, category)
VALUES ("'67 Mustang", "automotive");

INSERT INTO projects (title, category)
VALUES ("Mario Cosplay", "cosplay");

INSERT INTO projects (title, category)
VALUES ("3D D&D Game Board", "crafts");

INSERT INTO projects (title, category)
VALUES ("Model Plane", "crafts");

INSERT INTO projects (title, category)
VALUES ("Temple Replica", "models");

INSERT INTO projects (title, category)
VALUES ("Skate Deck", "sporting");

## jobs

INSERT INTO jobs (title, category)
VALUE ("Upholstery", "automotive");

INSERT INTO jobs (title, category)
VALUE ("Head Sculpting", "cosplay");

INSERT INTO jobs (title, category)
VALUE ("detail painting", "modeling");

INSERT INTO jobs (title, category)
VALUE ("miniature human models", "modeling");

INSERT INTO jobs (title, category)
VALUE ("building skateboard deck", "sports");

INSERT INTO jobs (title, category)
VALUE ("building model buildings", "crafts");

## bids

INSERT INTO bids (value)
VALUES (200);

INSERT INTO bids (value)
VALUES (150);

INSERT INTO bids (value)
VALUES (40);

INSERT INTO bids (value)
VALUES (50);

INSERT INTO bids (value)
VALUES (100);

INSERT INTO bids (value)
VALUES (60);

## projects_jobs

INSERT INTO projects_jobs (ProjectId, JobId)
VALUES (1,1);

INSERT INTO projects_jobs (ProjectId, JobId)
VALUES (2,2);

INSERT INTO projects_jobs (ProjectId, JobId)
VALUES (3,6);

INSERT INTO projects_jobs (ProjectId, JobId)
VALUES (4,3);

INSERT INTO projects_jobs (ProjectId, JobId)
VALUES (5,4);

INSERT INTO projects_jobs (ProjectId, JobId)
VALUES (6,5);

INSERT INTO users_projects (ProjectId, UserId)
VALUES (1,4);

INSERT INTO users_projects (ProjectId, UserId)
VALUES (2,5);

INSERT INTO users_projects (ProjectId, UserId)
VALUES (3,1);

INSERT INTO users_projects (ProjectId, UserId)
VALUES (4,3);

INSERT INTO users_projects (ProjectId, UserId)
VALUES (5,2);

INSERT INTO users_projects (ProjectId, UserId)
VALUES (6,6);

## users_bids

INSERT INTO users_bids (BidId, UserId)
VALUES (1,5);

INSERT INTO users_bids (BidId, UserId)
VALUES (2,3);

INSERT INTO users_bids (BidId, UserId)
VALUES (3,1);

INSERT INTO users_bids (BidId, UserId)
VALUES (4,2);

INSERT INTO users_bids (BidId, UserId)
VALUES (5,4);

INSERT INTO users_bids (BidId, UserId)
VALUES (6,2);

INSERT INTO jobs_skills (JobId, SkillId)
VALUES (1,1);

INSERT INTO jobs_skills (JobId, SkillId)
VALUES (2,5);

INSERT INTO jobs_skills (JobId, SkillId)
VALUES (3,3);

INSERT INTO jobs_skills (JobId, SkillId)
VALUES (4,9);

INSERT INTO jobs_skills (JobId, SkillId)
VALUES (5,2);

INSERT INTO jobs_skills (JobId, SkillId)
VALUES (6,7);

## jobs_bids

INSERT INTO jobs_bids (BidId, JobId)
VALUES (1, 1);

INSERT INTO jobs_bids (BidId, JobId)
VALUES (1, 2);

INSERT INTO jobs_bids (BidId, JobId)
VALUES (3, 3);

INSERT INTO jobs_bids (BidId, JobId)
VALUES (4, 4);

INSERT INTO jobs_bids (BidId, JobId)
VALUES (5, 5);

INSERT INTO jobs_bids (BidId, JobId)
VALUES (6, 6);


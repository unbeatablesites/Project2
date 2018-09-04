##skills

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

INSERT INTO projects (title, category, UserId)
VALUES ("'67 Mustang", "automotive", 4);

INSERT INTO projects (title, category, UserId)
VALUES ("Mario Cosplay", "cosplay", 5);

INSERT INTO projects (title, category, UserId)
VALUES ("3D D&D Game Board", "crafts", 1);

INSERT INTO projects (title, category, UserId)
VALUES ("Model Plane", "crafts", 3);

INSERT INTO projects (title, category, UserId)
VALUES ("Temple Replica", "models", 2);

INSERT INTO projects (title, category, UserId)
VALUES ("Skate Deck", "sporting", 6);

## jobs

INSERT INTO jobs (title, category, SkillId)
VALUE ("Upholstery", "automotive", 1);

INSERT INTO jobs (title, category, SkillId)
VALUE ("Head Sculpting", "cosplay", 5);

INSERT INTO jobs (title, category, SkillId)
VALUE ("detail painting", "modeling", 3);

INSERT INTO jobs (title, category, SkillId)
VALUE ("miniature human models", "modeling", 9);

INSERT INTO jobs (title, category, SkillId)
VALUE ("building skateboard deck", "sports", 2);

INSERT INTO jobs (title, category, SkillId)
VALUE ("building model buildings", "crafts", 7);

## bids

INSERT INTO bids (value, UserId)
VALUES (200, 5);

INSERT INTO bids (value, UserId)
VALUES (150,  3);

INSERT INTO bids (value, UserId)
VALUES (40, 1);

INSERT INTO bids (value, UserId)
VALUES (50, 2);

INSERT INTO bids (value, UserId)
VALUES (100, 4);

INSERT INTO bids (value, UserId)
VALUES (60, 2);

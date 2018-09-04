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
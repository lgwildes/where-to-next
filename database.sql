

CREATE TABLE "destination" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(255),
"international" BOOL DEFAULT FALSE,
"description" VARCHAR(255),
"url" VARCHAR(500),
"alt_text" VARCHAR(255)
);

CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"username" VARCHAR (255),
"password" VARCHAR (255)
);


CREATE TABLE "favorite" (
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "user",
"destination_id" INT REFERENCES "destination",
"notes" VARCHAR(255)
);

CREATE TABLE "category" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(255)
);

CREATE TABLE "feature" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(255),
"category_id" INT REFERENCES "category"
);

CREATE TABLE "destination_feature" (
"id" SERIAL PRIMARY KEY,
"destination_id" INT REFERENCES "destination",
"feature_id" INT REFERENCES "feature"
);



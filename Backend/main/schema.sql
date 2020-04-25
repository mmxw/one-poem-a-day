CREATE TABLE poems
(
  uid SERIAL PRIMARY KEY,
  author TEXT NOT NULL,
  title TEXT NOT NULL,
  poem TEXT NOT NULL,
  date_created DATE
);

CREATE TABLE authors
(
  uid SERIAL PRIMARY KEY,
  author TEXT NOT NULL UNIQUE
);

SELECT authors.uid AS author_id, authors.author, poems.title, poems.poem
FROM authors INNER JOIN poems ON authors.author = poems.author;
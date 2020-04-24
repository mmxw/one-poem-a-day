CREATE TABLE poems (
  uid SERIAL PRIMARY KEY, 
  author TEXT NOT NULL,
  title TEXT NOT NULL, 
  poem TEXT NOT NULL,
  date_created DATE
);
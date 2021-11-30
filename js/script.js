"use strict";
 const numberOfFilms = +prompt('How many films have you already watched', '');

 const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false
 };

 const a = prompt('One of the latest watched films', ''),
       b = prompt('How can you rate it', ''),
       c = prompt('One of the latest watched films', ''),
       d = prompt('How can you rate it', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
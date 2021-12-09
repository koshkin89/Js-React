"use strict";

 const numberOfFilms = +prompt('How many films have you already watched', '');

 const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false
 };


for (let i = 0; i < 2; i++) {
    const a = prompt('One of the latest watched films', ''),
          b = prompt('How can you rate it', '');

    if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('Error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Too low');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Enough');
} else if (personalMovieDB.count >= 30 ) {
    console.log('Too much');
} else {
    console.log('Error');
}

console.log(personalMovieDB);

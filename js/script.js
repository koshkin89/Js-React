"use strict";

const numberOfFilms = +prompt('How many films have you ever watched', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for ( let i = 0; i < 2; i++) {

    const a = prompt('One of the latest wached films', ''),
          b = prompt(' How can you rate it? ');

    if ( a != null && b != null && a != '' && b != '' && a.length < 50  ) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }  
}


if ( personalMovieDB.count < 10 ) {
    console.log('You haven`t watched enough films');
} else if ( personalMovieDB.count >= 10 &&  personalMovieDB.count < 30 ) {
    console.log( 'You are good enough' );
} else if ( personalMovieDB.count >= 30 ) {
    console.log( 'You are awesome filmwatcher' );
} else {
    console.log( 'Wthere is a mistake' );
}

console.log(personalMovieDB.count);
console.log(personalMovieDB);

"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

start();
rememberMyFilms();
detectPersonalLevel();
myFavoriteGenres();
showMyBD();


 function start() {
    numberOfFilms = +prompt('How many films have you already watched', '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('How many films have you already watched', '');
    }
 }

 function rememberMyFilms() {
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
 }

 function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Too low');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Enough');
    } else if (personalMovieDB.count >= 30 ) {
        console.log('Too much');
    } else {
        console.log('Error');
    }
 }

 function myFavoriteGenres() {
     for( let i=1; i <= 3; i++ ) {
        const kindGenres = prompt(`What is your favorite genres ${i}`, '');
        if( kindGenres != '' && kindGenres != null ) {
            personalMovieDB.genres[i - 1] = kindGenres;
        } else {
            console.log('Genres ERROR');
            i--;
        }    
     }
 }

 function showMyBD() {
     if( personalMovieDB.privat == false ) {
         console.log(personalMovieDB);
     }
 }


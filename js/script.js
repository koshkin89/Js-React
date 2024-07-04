"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you ever watched', '');

    while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('How many films have you ever watched', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for ( let i = 0; i < 3; i++) {

        const a = prompt('One of the latest wached films', ''),
              b = prompt(' How can you rate it? ');
    
        if ( a != null && b != null && a != '' && b != '' && a.length < 50  ) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }  
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if ( personalMovieDB.count < 10 ) {
        console.log('You haven`t watched enough films');
    } else if ( personalMovieDB.count >= 10 &&  personalMovieDB.count < 30 ) {
        console.log( 'You are good enough' );
    } else if ( personalMovieDB.count >= 30 ) {
        console.log( 'You are awesome filmwatcher' );
    } else {
        console.log( 'There is a mistake' );
    }
}

detectPersonalLevel();

function writeYourGeres() {
    for ( let i = 1; i <= 3; i++ ) { 
        personalMovieDB.genres[i - 1] = prompt(`Whrite your famous genre number ${i}`);
    }
}

writeYourGeres();

function showMyBD () {
    if( personalMovieDB.privat == false ) {
        console.log(personalMovieDB);
    }
}

showMyBD();
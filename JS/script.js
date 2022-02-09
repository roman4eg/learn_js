"use strict";
let nubmerOfFilms;

function start() {
    nubmerOfFilms = +prompt( "Сколько фильмов вы уже посмотрели?", '');

    while(nubmerOfFilms == '' || nubmerOfFilms == null || isNaN(nubmerOfFilms)) {
        nubmerOfFilms = +prompt( "Сколько фильмов вы уже посмотрели?", ''); 
    }
}
 start();

let personalMovieDB = {
    count: nubmerOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function detectPersonalLvl() {
    if(personalMovieDB.count < 10) {
        console.log("Просмотренно слишком мало фильмов");
    } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("Вы класический пользователь");
    } else if(personalMovieDB.count > 30) {
        console.log("Вы киноман");
    }
    else {
        console.log("Ошибка");
    }
    
}
// detectPersonalLvl();

function shwoMyDb(hidden) {
    if(!hidden) {
       console.log(personalMovieDB);
    }
}
shwoMyDb(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр по номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;

    }
}

writeYourGenres();

// console.log(personalMovieDB);
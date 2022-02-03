"use strict";
let nubmerOfFilms;

nubmerOfFilms = prompt( "Сколько фильмов вы уже посмотрели?", 0);

console.log(nubmerOfFilms);

let personalMovieDB = {
    count: nubmerOfFilms,
    movies: {},
    actors: {},
    genres: "",
    privat: false,
};

console.log(typeof(personalMovieDB.genres));
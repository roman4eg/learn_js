"use strict";
let nubmerOfFilms = prompt( "Сколько фильмов вы уже посмотрели?", 0);


let personalMovieDB = {
    count: nubmerOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


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

 



console.log(personalMovieDB);




"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};

const lastFilm1 = prompt ("Один из последних просмотренных фильмов ?", "");
const score1 = prompt ("На сколько оцените его ?", "");
const lastFilm2 = prompt ("Один из последних просмотренных фильмов ?", "");
const score2 = prompt ("На сколько оцените его ?", "");
personaMovieDB.movies[lastFilm1] = score1;
personaMovieDB.movies[lastFilm2] = score2;
console.log(personaMovieDB);
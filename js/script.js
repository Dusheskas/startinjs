/*

// Переменные

// Работаем в новом режиме (строгий режим)
"use strict";

let number = 5;
const leftBorderWidth = 1;

number += 10;

// Изменение значения константы
const object = {
   a:50
};

object.a = 10; 

// Старый вариант создания переменных, который лучше не использовать 
var name = 'Ivan';



// Типы данных

// Объект
const obj = {
   name: "John",
   "age": 25,
   isMarried: false
};

// Добавление свойства в объект
obj.newKey = 'key';


// Обращение к значению объекта
console.log(obj.newKey);

// Или так, но лучше через точку
// console.log(obj["name"]);


// Массив
let arr = ['plum.png', 'orange.png', 'apple.bmp', 6, {}, []];

// Обращение к значению массива
console.log(arr[0]);

*/

// Практика

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
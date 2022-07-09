// Работаем в новом режиме (строгий режим)
"use strict";

/*

// Переменные


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



// !!! Условия !!!

/*

if () {
   
} else if {
   
} else {

}

const num = 50;

if (num < 49) {
   console.log('Error');
} else if (num > 100) {
   console.log('Too much');
} else {
   console.log("Okey");
}

// Если условие верно => ----- Если не верно =>
(num === 50) ? console.log("Okey") : console.log('Error');


switch (num) {
   case 49:
      console.log("To less");
      break;
   
   case 50:
      console.log("Ok");
      break;

   case 100:
      console.log("To much")
      break;

   default:
      console.log("Не судьба");
      break;
}

*/

// Циклы

let num = 50;

while (num <= 55) {
   console.log(num);
   num++;
}

do {
   console.log(num);
   num++;
}
while (num <= 55);

for (let i = 1; i < 8; i++) {
   console.log(num);
   num++;
}

// break and continue работают тоже

// Нужно сделать отдельный файл для практики и для теории

// Вложенные циклы

for (let i = 0; i < 3; i++) {
   console.log(`i=${i}`);
   for (let j = 0; j < 3; j++){
      console.log(j);
   }
}


let result = '';
const lenght = 7;


for (let i = 1; i < lenght; i++){
   for (let j = 1; j < i; j++) {
      result += '* ';
   }
   result += '\n';
}

console.log(result);
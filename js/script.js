// Работаем в новом режиме (строгий режим)
"use strict";



// Переменные

function variables() {

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
}




// Типы данных

function typesOfData(){

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
}


// !!! Условия !!!

function condition(){

   // if () {
      
   // } else if {
      
   // } else {
   
   // }
   
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
}


// Циклы

function cycle() {

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
}


// !!! Функции =-==-=-=-=-=-=-==-=-=-=-=-=-=-=-

// Этот вид функций существует сразу. То есть они объявлены могут быть внизу, а использовать хоть в первой строчке

function showFirstMessage(text, text2) {
   console.log(text + text2);
   let num = 20;
}

// Вызов функции
showFirstMessage("Аргумент функции", " Второй текст");

function calc(a, b) {
   return (a+b);
}

console.log(calc(4,3));

function ret() {
   let num = 50;
   return num;
}

const anotherNum = ret();
console.log(anotherNum);


// Функциональное выражение (можно вызвать только после объявления)

const logger = function() {
   console.log("hello");
};

logger();

// Стрелочные функции

const calcu = (a, b) => a + b; //Короткий вариант (если выполняется только одна строчка)
const calcc = (a, b) => { return a + b };
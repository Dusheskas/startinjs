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
         console.log("To much");
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
const calcc = (a, b) => { return a + b; };


// Важность return
const usdCurr = 37;
const discount = 0.9;

function convert(amount, curr) {
   return curr * amount;
}

function promotion(result) {
   console.log(result * discount);
}

promotion(convert(500, usdCurr));


// !!! =-=-=-=- Методы и свойства =-=-=-=-= !!!

function Methods() {

   // Строки
   const str = "test";
   
   console.log(str.toUpperCase());
   // При єтом создается новая строка, а старая не изменяется
   
   // Поиск подстроки. Если не найдет - вернет "-1"
   const fruit = "Some fruit";
   console.log(fruit.indexOf("fruit"));
   
   const logg = "Hello World";
   // ВЫрезать подстроку с первого индекса до второго не включая его
   console.log(logg.slice(6, 11));
   
   // Не поддерживает отрицательные значения (с права налево)
   console.log(logg.substring(6, 11));
   
   // С какого символа и сколько символов
   console.log(logg.substr(6, 5));

   // Числа
   const num = 12.2;

   // Округление
   console.log(Math.round(num));

   // Со строки в число. (вернется 12)
   const test = "12.2px";
   console.log(parseInt(test));

   // Со строки в число с плавающей точкой
   console.log(parseFloat(test));
}

// Объекты
function objects() {

   const options = {
      name: 'test',
      width: 1024,
      colors: {
         border: 'black',
         bg: 'red'
      },
      // Создаем свой метод
      makeTest: function() {
         console.log("Test");
      }
   };

   // Деструктуризация
   const {border, bg} = options.colors;
   console.log(border);
   
   // проверка созданного метода
   options.makeTest();
   
   // Удаление ключа в объекте
   // delete options.name;

   
   // Считаем количество ключей в объекте (тупым способом)
   let counter = 0;
   
   // Перебор значений в объекте
   for (let key in options) {
      // если внутри объекта другой объект
      if (typeof(options[key]) == 'object') {
         for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
         }
      } else {
      console.log(`Свойство ${key} имеет значение ${options[key]}`);
      counter++;
      }
   }
   console.log(`counter = ${counter}`);

   // Считаем количество ключей в объекте (умным способом) только на верхнем уровне
   console.log(Object.keys(options).length);
}

function arrays() {

   // Создание массива
   const arr = [1,22,3,6,18];
   
   // Сортировка массива (числа)
   arr.sort(compareNum);
   function compareNum(a,b) {
      return a - b;
   }
   console.log(arr);

   // Самое главное нарушение массивов
   // arr[99] = 0;

   // Длина массива (последний индеккс + 1)
   console.log(arr.length);


   // Удаление последнего элемента массива
   arr.pop();

   // Добавление элемента в конец
   arr.push(10);

   // console.log(arr);

   // Перебор массива (базованый способ)
   for (let i=0; i<arr.length; i++) {
      console.log(arr[i]);
   }

   // Перебор массива (for of)
   // У него работают break & continue
   for (let value of arr) {
      console.log(value);
   }

   // Гибкий перебор массива (foreach) для каждого элемента массива будет работать переданная callback функция
   // Первый аргумент в функции - тот элемент, который сейчас перебираем. Второй - номер по порядку. Третий - ссылка на перебираемый массив
   arr.forEach(function(item, i, arr) {
      console.log(`${i}: ${item} внутри массива ${arr}`);
   });

   // Из строки делаем массив
   const str = prompt("", "");
   const products = str.split(", ");
   console.log(products);

   // Сортировка (строк)
   products.sort();

   // Из массива строку
   console.log(products.join("; "));
}

// arrays();

// Передача по ссылке или по значению
function datagive() {
   let a = 5,
      b = a;

   b = b + 5;

   console.log(b);
   console.log(a);
   

   const obj = {
      a: 5,
      b: 1
   };

   // Передаем ссылку
   const copy = obj;

   copy.a = 10;
   console.log(copy);
   console.log(obj);

   // Примитивные типы данных передаются по значению
   // Объектные типы данных - по ссылке

   // Копируем значения объектов
   function coopy(mainObj) {
      let objCopy = {};

      let key;
      for (key in mainObj) {
         objCopy[key] = mainObj[key];
      }
      return objCopy;
   }

   // Типо тестим
   const numbers = {
      a:2,
      b:5,
      c: {
         x: 7,
         y: 4
      }
   };

   const newNumbers = coopy(numbers);

   newNumbers.a = 10;
   // Тут только по ссылке  
   newNumbers.c.x = 10;

   console.log(newNumbers);
   console.log(numbers);

   // Добавляем объект в объект
   const add = {
      d:17,
      e: 20
   };

   // console.log(Object.assign(numbers, add));

   // Можно добавлять объект в пустой объект. Это копия можно сказать. add не будет меняться
   console.log(Object.assign({}, add));


   // создаем копию массивов

   const oldArray = ['a', 'b', 'c'];
   // При таком копировании передается только ссылка. То есть я всё также буду менять и олда и нью
   let newArray = oldArray;
   // Копируем по значению типо
   newArray = oldArray.slice();

   // Test
   newArray[1] = "test";

   console.log(newArray);
   console.log(oldArray);

   // spread (подставляем значения, типо вытягиваем их)
   const video = ['youtube', 'vimeo', 'rutube'],
         blogs = ['wordpress', 'livejournal', 'blogger'],
         internet = [...video, ...blogs, 'vk', 'facebook'];

   console.log(internet);

   function log(a, b, c) {
      console.log(a);
      console.log(b);
      console.log(c);
   }

   const num = [2,5,7];
   // Функция принимает три разных элемента, а не объект с тремя элементами
   log(...num);
}
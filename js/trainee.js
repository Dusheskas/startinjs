for (let i = 20; i >= 10; i--) {
   if (i === 13) {
      break;
   } 
   console.log(i);
}

for (let i = 1; i <=10; i++) {
   if (i % 2 === 0) {
       console.log(i);
   }
}

let i = 2;
while (i <= 16) {

   if (i%2 === 0) {
   i++;
   continue;
   } else {
   console.log(i);
   }
   i++;
} 
   

// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
const arr = [3, 5, 8, 16, 20, 23, 50];
const resultt = [];

// Пишем решение вот тут
for (let i = 0; i < arr.length; i++) {
   resultt[i] = arr[i];
}


const data = [5, 10, 'Shopping', 20, 'Homework'];
const resul = [];

for (let i = 0; i < data.length; i++) {
   resul[i] = data[data.length-1 -  i];
}

console.log(resul);

const lines = 5;
let result = "";

for (let i = 0; i <= lines; i++) {
   for (let j = lines - i; j > 0; j--) {
      result += " ";
   }

   for (let k = 0; k < 2 * i + 1; k++){
      result += "*";
   }
  
   result += "\n";
}

console.log(result);

function getMathResult(value1, value2) {

   if (typeof(value2) != "number" || value2 <= 0) {
      console.log(value1);
      return value1;
   }

   let result = "";
   for(let i = 1; i <= value2; i++) {
      result += (value1 * i);
      if (i < value2) {
         result += "---";
      }
   }
   return result;
}

console.log(getMathResult(3, 10));

// Расчитываю объем и площадь поверхности куба
function calculateVolumeAndArea(a) {
   if (typeof(a) == "number" && a > 0 && parseInt(a) == a) {
      return `Объём куба: ${Math.pow(a,3)}, площадь всей поверхности: ${6*Math.pow(a,2)}`;
   } else { 
      return "При вычислении произошла ошибка";
   }
}

console.log(calculateVolumeAndArea(5));

// Узнаю номер купе по номеру места
function getCoupeNumber(x) {
   if ( x < 0 || typeof(x) != "number" || parseInt(x) != x) {
      return "Ошибка. Проверьте правильность введеного номера места";
} else if ( x > 36 || x == 0) {
      return "Таких мест в вагоне не существует";
   } else {
      return (Math.ceil(x/4));
   }
}
console.log(getCoupeNumber(0));


// Узнаю количество часов из минут
function getTimeFromMinutes(value) {
   const hours = parseInt(value/60);
   const minutes = value%60;

   if (typeof(value) != "number" || !Number.isInteger(value) || value < 0) {
      return "Ошибка, проверьте данные";
   }

   if ( hours % 10 == 1 && hours % 100 != 11 ) {
      return `Это ${hours} час и ${minutes} минут`;
   } else if ( (hours % 10 == 2 || hours % 10 == 3 || hours % 10 == 4) && (hours % 100 != 12 || hours % 100 != 13 || hours % 100 != 14)) {
      return `Это ${hours} часа и ${minutes} минут`;
   } else {
      return `Это ${hours} часов и ${minutes} минут`;
   }
}
// Результат

// Ищем максимальное число
function findMaxNumber(num1, num2, num3, num4) {
   let arr = [num1, num2, num3, num4];
   for (let i = 0; i<4; i++) {
      if (typeof(arr[i]) != "number" || arr[i] == undefined) { return 0; }
   }
   return (Math.max.apply(null, arr));
}
console.log(findMaxNumber(1, 2, "5", 7));


// С числами Фибоначи
function fib(x) {
   let arr = [];

   if (typeof(x) != "number" || x === undefined || x < 0 || !Number.isInteger(x)) { return ""; }

   for (let i = 0; i < x; i++) {
      if (i<2) {
         arr[i] = i;
      } else {
         arr[i] = arr[i-1] + arr[i-2];
      }
   }

   return (arr.join(" "));
}
console.log(fib(0));
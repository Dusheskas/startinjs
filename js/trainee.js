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


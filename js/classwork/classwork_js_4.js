// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function f(a,b,c) {
    if (a>b && a>c) {
        if (b>c) {
            console.log(a, b, c);
        }else {
            console.log(a, b, c);
        }
    }else if (b > a && b>c) {
        if (a > c) {
            console.log(b, a, c)
        }else {
            console.log(b, c, a)
        }
    }else{
        if (a > b) {
            console.log(c, a, b)
        }else {
            console.log(c, b,a)
        }
    }
}

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function c(a,b,c) {
    if (a<b && a<c) {
        if (b<c) {
            console.log(a, b, c);
        }else {
            console.log(a, b, c);
        }
    }else if (b < a && b<c) {
        if (a < c) {
            console.log(b, a, c)
        }else {
            console.log(b, c, a)
        }
    }else{
        if (a < b) {
            console.log(c, a, b)
        }else {
            console.log(c, b,a)
        }
    }
}

// - створити функцію яка повертає найбільше число з масиву
// let maxArray = [300,5,8,7,6,10,90000,1,1000]
// function arrayMax(array) {
//     let max = array[0];
//     for (const element of array) {
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }

// - створити функцію яка повертає найменьше число з масиву

// let minArray = [300,5,8,7,6,10,90000,1,1000]
// function arrayMin(array) {
//     let min = array[0];
//     for (const element of array) {
//         if(element < min){
//             min = element;
//         }
//     }
//     return min;
// }

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let sumArray = [1,2,3,4]; // 10
// function sumElement (array){
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum = arrayElement + sum;
//     }
//     return sum;
// }

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function serednie (array){
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum = arrayElement + sum;
//     }
//     return sum/array.length;
// }

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function minMax(arg) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log("max ", max);
//     return min;
// }

// - створити функцію яка заповнює масив рандомними числами

// function funRandom (length) {
//     let arrayEmpty = [];
//     for (let i = 0; i < length; i++){
//         arrayEmpty.push(Math.floor(Math.random()*100));
//     }
// return arrayEmpty
// };
//



// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomNumber(length,limit) {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.round(Math.random() * limit));
//     }
//     return emptyArray;
// }



// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reverse(arr) {
//     let arr = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = newArr[i];
//     }
//
//     return newArr;
// }

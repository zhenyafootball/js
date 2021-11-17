// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let text =['dynamo','vorskla', 'ruch' ,'zorya' ,'desna' ];
// let num = [26, 333, 999, 13, 95];
// let all = ['okten', 444 , true , 555, 'football'];
// console.log(text);
// console.log(num);
// console.log(all);
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let kill =[];
// kill[0]='hello';
// kill[1]='midl';
// kill[2]=2025 ;
// console.log(kill);
// document.write(kill);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for(let i=0;i<=10; i++) {
//     document.write('<div>dynamo chemp</div>');
// }

// for(let i=0;i<=10; i++) {
//     document.write(`<div>dynamo chemp ${i}</div>`)
// }

// let j =0;
// while(j<20){
//     document.write(`<h1>forever</h1>`);
//     j++;
// }

// let j =0;
// while(j<20){
//     document.write(`<h1>forever${j}</h1>`);
//     j++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let stringArray = ['vw', 'seat', 'porshe', 'skoda', 'toyota', 'honda', '2021', 'year', 'audi', 'chrysler'];
// for (i = 0; i < stringArray.length; i++) {
//     console.log(stringArray[i])
// }
// let numArray= [11,22,33,44,55,66,77,88,99,111];
// for (j = 0; j < numArray.length; j++) {
//     console.log(numArray[j])
// }
// let allArray = [false, 'gol', 1995, true, 'okten',23,45,'asia',{},[],'hi'];
// for (i = 0; i < allArray.length; i++) {
//     console.log(allArray[i])
// }

// let arrayBoolean = [false, 'gol', 1995, true, 'okten', 23, 45, 'asia', {}, [], 'hi'];
// for (i = 0; i < arrayBoolean.length; i++) {
//     if (typeof arrayBoolean[i] === 'boolean') {
//         console.log(arrayBoolean[i]);
//     }
// }


// let arrayNumber = [false, 'gol', 1995, true, 'okten', 23, 45, 'asia', {}, [], 'hi'];
// for (i = 0; i < arrayNumber.length; i++) {
//     if (typeof arrayNumber[i] === 'number') {
//         console.log(arrayNumber[i]);
//     }
// }


// let arrayString = [false, 'gol', 1995, true, 'okten', 23, 45, 'asia', {}, [], 'hi'];
// for (i = 0; i < arrayString.length; i++) {
//     if (typeof arrayString[i] === 'string') {
//         console.log(arrayString[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// let newEmptyAudi = [];
// newEmptya]Audi[0] = 'scooter';
// newEmptyAudi[1] = 'soccer';
// newEmptyAudi[2] = 3333;
// newEmptyAudi[3] = 'why';
// newEmptyAudi[4] = 'when';
// newEmptyAudi[5] = 'what';
// newEmptyAudi[6] = 'summer winter snow';
// newEmptyAudi[7] = true;
// newEmptyAudi[8] = 9999;
// newEmptyAudi[9] = false;
//
// for (let i = 0; i < newEmptyAudi.length; i++) {
//     console.log(newEmptyAudi[i]);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log('поточний крок циклу : ' + i + ' ');
//     document.write('поточний крок циклу : ' + i + ' ');
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log('поточний крок циклу : ' + i + ' ');
//     document.write('поточний крок циклу : ' + i + ' ');
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log('поточний крок циклу : ' + i + ' ');
//     document.write('поточний крок циклу : ' + i + ' ');
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 0){
//         console.log('поточний крок циклу : ' + i + ' ');
//         document.write('поточний крок циклу : ' + i + ' ');
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 1){
//         console.log('поточний крок циклу : ' + i + ' ');
//         document.write('поточний крок циклу : ' + i + ' ');
//     }
// }
//





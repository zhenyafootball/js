// 1- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function calculate(a, b) {
//     let calculate = a*b;
//     return calculate;
// }
// console.log(calculate(10,10))
// document.write('Площа прямокутника: ' + calculate(10 ,10))

// 2- створити функцію яка обчислює та повертає площу кола з радіусом r
// function coloS(r) {
//     let radius = r ** 2;
//     let coloS = 3.14 * radius;
//     return coloS;
// }
// console.log(coloS(10))
// document.write('Площа круга: ' + coloS(10))

// 3-- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function Cylinder(r, h) {
//     let sCylinder = 2 * 3.14 * r * h;
//     return sCylinder;
// }
// console.log(Cylinder(10,10))
// document.write('Площа циліндра: ' + Cylinder(10, 10))
//
// 4- створити функцію яка приймає масив та виводить кожен його елемент

// let conclusion = [1,2,3,4,5,'hello world', 'okten'];
// function dataConclusion (conclusion) {
//     for (let i = 0; i < conclusion.length; i++) {
//        document.write(conclusion[i])
//     }
// }
// dataConclusion(conclusion)

// 5-- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function dataP (text) {
//     document.write(`<p>${text}</p>`)
//     document.write(`<p>${text}</p>`)
//     document.write(`<hr>`)
//
// }
// dataP('empty text')
//

// 6-- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function newUl(arg) {
//     document.write(`<ul>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`</ul>`)
// }
// newUl('Simpsons');

// 7
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function createUl(text, number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// createUl('empty li', 3);

// 8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let anyArray = [true,'Stepan Giga', 2021, 'Ivo Bobul'];
// function action (array){
//     document.write(`<ol>`)
//         for (let i = 0; i < array.length; i++) {
//             document.write(`<li>${array[i]}</li>`);
//         }
//     document.write(`</ol>`)
// }
// action(anyArray);

// 9- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
//
// let newArray = [{id: 1, name: 'Soso', age: 55}, {id: 2, name: 'Valeriy', age: 50}, {id: 3, name: 'Ivo', age: 65}];
// function lowkick(array) {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
//     }
// }
// lowkick(newArray);
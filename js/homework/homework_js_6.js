// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let lengthOne = 'hello world';
// console.log(lengthOne.length);
//
// let lengthTwo = 'lorem ipsum';
// console.log(lengthTwo.length);
//
// let lengthEmpty = 'javascript is cool';
// console.log(lengthEmpty.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str= 'hello world';
// let toUpperCase= str.toUpperCase();
// console.log(toUpperCase);
//
// let str1= 'lorem ipsum';
// let toUpperCase1= str1.toUpperCase();
// console.log(toUpperCase1);
//
// let str2= 'javascript is cool';
// let toUpperCase2= str2.toUpperCase();
// console.log(toUpperCase2);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str= 'HELLO WORLD';
// let toLowerCase= str.toLowerCase();
// console.log(toLowerCase);
//
// let str= 'LOREM IPSUM';
// let toLowerCase= str.toLowerCase();
// console.log(toLowerCase);
//
// let str= 'JAVASCRIPT IS COOL';
//  let toLowerCase= str.toLowerCase();
//  console.log(toLowerCase);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str= ' dirty string   ';
// let trim = str.trim();
// console.log(trim)

// - Напишіть функцію stringToarray(str), яка повертає підрядок, що складається із зазначеної кількості символів.
//  //   let str = 'Каждый охотник желает знать';
//  //    document.writeln(delete_characters(str, 7)); // Каждый
//
// let stringToarray = (str, index) => {
//     return str.substr(0, index);
// };
// let str = 'Каждый охотник желает знать';
// document.writeln(stringToarray(str, 7)); // Каждый

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.\
// При цьому всі символи рядка необхідно перевести у верхній регістр.
// //    let str = "HTML JavaScript PHP";
// //document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// let insert_dash = (str) => {
//     let splitJoinUpper = str.split(' ').join('-').toUpperCase();
//     return splitJoinUpper;
// }
// let string = "HTML JavaScript PHP";
// console.log(insert_dash(string));
// document.write(insert_dash(string)); // 'HTML-JAVASCRIPT-PHP'

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// let firstUp = (str) => {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1)
// };
// document.write(firstUp('hello okten'));
// console.log(firstUp('hello okten'));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
// document.write(capitalize('okten hi you are welcome'));
// console.log(capitalize('okten hi you are welcome'));


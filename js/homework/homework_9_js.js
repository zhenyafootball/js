// Все робити за допомоги js.
// - створити блок,
// let div = document.createElement('div');
// // - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
//  - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.background = 'silver';
// div.style.color = 'red';
// div.style.fontSize = '36px';
//  - додати цей блок в body.
// document.body.appendChild(div);
//  - клонувати його повністю, та додати клон в body.
// document.body.appendChild(div.cloneNode(true));
//
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//  Завдання робити через цикли.
// for (const course of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.innerText = `${course.title} ${course.monthDuration}`;
//     document.body.appendChild(divElement);
// }
//
//
//  - Є масив
//  let coursesAndDurationArray = [
//      {title: 'JavaScript Complex', monthDuration: 5},
//      {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//      {title: 'QA Complex', monthDuration: 4},
//      {title: 'FullStack', monthDuration: 7},
//      {title: 'Frontend', monthDuration: 4}
//  ];
//  За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
//  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// for (const course of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     let h1 = document.createElement('h1');
//     h1.innerText = course.title;
//
//     let p = document.createElement('p');
//     p.innerText = course.monthDuration;
//
//
//     divElement.appendChild(h1);
//     divElement.appendChild(p);
//     document.body.appendChild(divElement);
// }
//

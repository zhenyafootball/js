// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function people(id, name, surname , email, phone) {
//     this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone
// }

// створити пустий масив, наповнити його 10 об'єктами new User(....)
// const user=[
//     new User(4,'Denis' , 'Popov', 'dp@gmail.com' ,+380931112223) ,
//     new User(10 , 'Kolya' , 'Shaparenko' , 'ks@gmail.com' , +380731010101) ,
//     new User(17,'Bogdan' , 'Lednev' , 'bl@gmail.com' , +380688887771) ,
//     new User(25 , 'Ilya' , 'Zabarnyi' , 'iz@gmai.com' +380674343434),
//     new User(1 , 'Georgiy' , 'Bushchan' , 'gb@gmail.com' +380971809988) ,
//     new User(16, 'Vitaliy' , 'Mykolenko' , 'vm@gmail.com', +380939444412) ,
//     new User(20 , 'Oleksandr' , 'Karavaev' , 'Ok@gmail.com', +380734445559) ,
//     new User(24 , 'Oleksandr' ,  'Tymchyk' , 'ot@gmail.com' ,+380677778889) ,
//     new User(28 , 'Vladyslav' ,  'Kulach' , 'vk@gmail.com' , +380936677889)
//     new User(29 , 'Vitaliy' , 'Buyalskyi' , 'vb@gmail.com' , +380997657654)
// ];
// console.log(user);


    // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUser = user.filter((item) => {
//     if (item.id % 2 === 0){
//     return item
//     }});
// console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// user.sort((a, b) => a.id - b.id);
// console.log(sortUser)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// створити пустий масив, наповнити його 10 об'єктами Client

// let emptyArray = [
//     new Client(4,'Denis' , 'Popov', 'dp@gmail.com' ,+380931112223,['book', 'game', 'ps4']) ,
// //     new Client(10 , 'Kolya' , 'Shaparenko' , 'ks@gmail.com' , +380731010101,['book', 'game', 'ps4']) ,
// //     new Client(17,'Bogdan' , 'Lednev' , 'bl@gmail.com' , +380688887771,['book', 'game', 'ps4']) ,
// //     new Client(25 , 'Ilya' , 'Zabarnyi' , 'iz@gmai.com' +380674343434,['book', 'game', 'ps4']),
// //     new Client(1 , 'Georgiy' , 'Bushchan' , 'gb@gmail.com' +380971809988,['book', 'game', 'ps4']) ,
// //     new Client(16, 'Vitaliy' , 'Mykolenko' , 'vm@gmail.com', +380939444412,['book', 'game', 'ps4']) ,
// //     new Client(20 , 'Oleksandr' , 'Karavaev' , 'Ok@gmail.com', +380734445559,['book', 'game', 'ps4']) ,
// //     new Client(24 , 'Oleksandr' ,  'Tymchyk' , 'ot@gmail.com' ,+380677778889,['book', 'game', 'ps4']) ,
// //     new Client(28 , 'Vladyslav' ,  'Kulach' , 'vk@gmail.com' , +380936677889,['book', 'game', 'ps4'])
// //     new Client(29 , 'Vitaliy' , 'Buyalskyi' , 'vb@gmail.com' , +380997657654,['book', 'game', 'ps4'])
// // ];
// console.log(emptyArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sortCLients = emptyArray.sort((a, b) => a.order.length - b.order.length);
// console.log(sortCLients)


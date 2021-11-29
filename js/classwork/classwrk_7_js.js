// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Cars(model, zavod, year, maxspeed, volume) {
//     this.model = model;
//     this.zavod = zavod;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//         }
//     };
//     this.newMaxSpeed = function (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
// let addCar = new Cars('Chraysler', 'Usa', 2014, 240, 2.4);
// console.log(addCar);
// addCar.drive();
// addCar.info();
// addCar.newMaxSpeed(20);
// addCar.drive();
// addCar.changeYear(2017)
// addCar.info();
// addCar.addDriver('Vasil')
// console.log(addCar)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Cars2 {
//     constructor(model, producer, year, maxspeed, engineVal) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engineVal = engineVal;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     }
//     info() {
//         for (const key in this) {
//             console.log(`${key} - ${this[key]}`)
//         }
//     }
//     newMaxSpeed (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     }
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
// let addCar2 = new Cars2('Chraysler', 'Usa', 2014, 240, 2.4);
// console.log(addCar2);
// addCar2.drive();
// addCar2.info();
// addCar2.newMaxSpeed(20);
// addCar2.drive();
// addCar2.changeYear(2010)
// addCar2.info();
// addCar2.addDriver('maks')
// console.log(addCar2)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Popelushka {
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }

// const popelushkaArray = [
//     new Popelushka('jana', 22, 46),
//     new Popelushka('nina', 21, 25),
//     new Popelushka('ira', 24, 30),
//     new Popelushka('lesia', 26, 31),
//     new Popelushka('nadia', 29, 32),
//     new Popelushka('tatyana', 90, 58),
//     new Popelushka('lola', 87, 34),
//     new Popelushka('goha', 34, 39),
//         new Popelushka('goga', 34, 34),
//          new Popelushka('oksana', 33, 39)
// ];
// console.log(popelushkaArray);


// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// class Princ {
//     constructor(name, age, findShose) {
//         this.name = name;
//         this.age = age;
//         this.findShose = findShose;
//     }
// }
// const prince = new Princ('Stefkoo', 45, 46);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// const newPara = (popelushkaArray, prince) => {
//     for (const item of popelushkaArray) {
//         if (item.footsize === prince.findShose) {
//             return `tvoya populushka: ${item.name}`
//         }
//     }
// };
// console.log(newPara(popelushkaArray, prince))

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// const emptyPrincess = popelushkaArray.find((item) => item.footsize === prince.findShose);
// console.log(emptyPrincess);


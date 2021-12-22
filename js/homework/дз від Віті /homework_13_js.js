            // PROMISE
// function Up(isWorkingDay = true) {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             if (isWorkingDay) {
//                 resolve ('Here we go again');
//             }
//             reject('go sleep')
//         },1000)
//     })
// }

//   function goEat(eat) {
//     return new Promise((resolve ,reject) => {
//         setTimeout(() => {
//             if (eat) {
//                 resolve (`Cooking ${eat}`);
//             }
//             reject('пустий холодильник ((')
//         },300)
//     })
//
//   }
//
// function goWork() {
//     return new Promise((resolve ) => {
//         setTimeout(() => {
//                 resolve ('click  click  click');
//
//
//         },8000)
//     })
//
// }
//
// function goSleep() {
//     return new Promise((resolve ) => {
//         setTimeout(() => {
//             resolve ('snore snore snore');
//
//
//         },4000)
//     })
//
// }
//
//
// Up(true)
// .then(morning =>{
//     console.log(morning);
//
//     return goEat('fried eggs')
// })
//     .then( eat => {
//         console.log(eat);
//
//         console.log ('deliciously')
//
//         return goWork()
//     })
//
//        .then(completedTask => {
//            console.log(completedTask);
//
//            return goEat('borsch')
//        })
//      .then(obid => {
//          console.log(obid)
//
//          console.log ('deliciously')
//
//          return goWork()
//      })
//
//     .then(completedTask => {
//         console.log(completedTask);
//
//
//
//         return goEat('risotto')
//     })
//
//     .then (dinner => {
//         console.log(dinner);
//
//         console.log ('deliciously')
//
//         return goSleep()
//     })
//
//     .then (sleep =>{
//         console.log(sleep)
//     })
//
// .catch(reason => {
//     console.log ('ERRRRROPOOOR' , reason)
// })
//

           // CALLBACK
// function Up(isWorkingDay ,callback) {
//         setTimeout(()=>{
//             if (isWorkingDay) {
//
//                 callback('Hello')
//                 return
//             }
//             console.log('Here we go again');
//             callback(null,isWorkingDay)
//         },1000)
//
// }
//
//
//   function goEat(eat, callback) {
//
//         setTimeout(() => {
//             if (eat) {
//                console.log ('I cook food');
//                callback('food')
//             }else {
//                console.log('пустий холодильник ((')
//             }
//             callback(null,eat)
//         },1300)
//
//
//   }
//
// function goWork(work ,callback) {
//         setTimeout(() => {
//                 console.log ('click  click  click');
//
//           callback(null, work)
//         },8000)
//
// }
//
// function goSleep(sleep,callback) {
//
//         setTimeout(() => {
//             console.log('snore snore snore');
//             callback(null, sleep)
//
//         }, 9000)
//
// }
//
//
// Up( true,()=>{
//     console.log ('morning')
//
//
//     goEat( true,eat => {
//         console.log('eating');
//
//
//
//
//     })
//
//        goWork( true,completedTask => {
//            console.log('completed1');
//
//        })
//
//
//
//     goWork(true,completedTask => {
//         console.log('completed');
//
//
//
//
//     })
//
//
//     goSleep (true,sleep => {
//         console.log('sleep')
//     })
//
// })


             // ASYNG AWAIT
// function Up(isWorkingDay ) {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             if (isWorkingDay) {
//                 resolve ('hello');
//             }
//             reject('go sleep')
//         },1000)
//     })
// }
//
//   function goEat(eat) {
//     return new Promise((resolve ,reject) => {
//         setTimeout(() => {
//             if (eat) {
//                 resolve ('');
//             }
//             reject('пустий холодильник ((')
//         },300)
//     })
//
//   }
//
// function goWork() {
//     return new Promise((resolve ) => {
//         setTimeout(() => {
//                 resolve ('click');
//
//
//         },8000)
//     })
//
// }
//
//             function goWatchfilm() {
//                 return new Promise((resolve ) => {
//                     setTimeout(() => {
//                         resolve ('watch');
//
//
//                     },9000)
//                 })
//
//             }
//
// function goSleep() {
//     return new Promise((resolve ) => {
//         setTimeout(() => {
//             resolve ('');
//
//
//         },9000)
//     })
//
// }
//
//
//  async function morning() {
//     try {
//         const newDay = await Up(true);
//         const newEat1 = await goEat(newDay);
//
//         console.log(newDay, ' newDay1');
//         console.log(newEat1, ' eat macaroni');
//
//
//         const job = await goWork(true);
//         const newEat = await goEat(job)
//         console.log(job, 'job is done ')
//         console.log(newEat, 'obid')
//
//
//         const job1 = await goWork(true)
//         const dinner = await goEat(job1)
//
//
//         console.log(job, 'job is done')
//         console.log(dinner, 'dinner')
//
//
//         const film = await goWatchfilm(true)
//         const sleep = await goSleep(film)
//
//
//         console.log(film, 'Harry Potter')
//         console.log(sleep, 'hrap')
//
//
//     } catch(e) {
//      console.Log('error')
//      console.Log(e)
//  }
//             }
//
//  morning()
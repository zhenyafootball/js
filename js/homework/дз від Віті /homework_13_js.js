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

           // CALLBACL
// function Up(isWorkingDay ,callback) {
//         setTimeout(()=>{
//             if (isWorkingDay) {
//                 console.log('Here we go again');
//                 callback()
//             }
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
//                callback()
//             }else {
//                console.log('пустий холодильник ((')
//             }
//         },1300)
//
//
//   }
//
// function goWork(work ,callback) {
//         setTimeout(() => {
//                 console.log ('click  click  click');
//
//           callback()
//         },8000)
//
// }
//
// function goSleep(sleep,callback) {
//
//         setTimeout(() => {
//             console.log('snore snore snore');
//             callback()
//
//         }, 9000)
//
// }
//
//
// Up( true,()=>{
//     console.log ('morning')
// })
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
//
//

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
//  async function morning(){
//      const newDay = await Up(true);
//        const newEat = await goEat(newDay);
//
//      console.log(newDay, ' newDay');
//      console.log(newEat, ' eat macaroni');
//
// }
//
//  morning ()
//
//
//             async function time(){
//                 const job = await goWork(true);
//                 const newEat = await goEat(job)
//                 console.log(job, 'job is done ')
//                 console.log(newEat , 'obid')
//             }
//
//             time()
//
//             async function time2(){
//     const job = await goWork(true)
//     const dinner  = await goEat(job)
//
//
//     console.log(job,'job is done')
//     console.log(dinner, 'dinner')
// }
//
// time2()
//
//             async function night(){
//                 const film = await goWatchfilm(true)
//                 const sleep  = await goSleep(film)
//
//
//                 console.log(film,'Harry Potter')
//                 console.log(sleep, 'hrap')
//             }
//
//             night()
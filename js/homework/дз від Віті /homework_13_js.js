function Up(isWorkingDay = true) {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if (isWorkingDay) {
                resolve ('Here we go again');
            }
            reject('go sleep')
        },1000)
    })
}

  function goEat(eat) {
    return new Promise((resolve ,reject) => {
        setTimeout(() => {
            if (eat) {
                resolve (`Cooking ${eat}`);
            }
            reject('пустий холодильник ((')
        },300)
    })
      
  }

function goWork() {
    return new Promise((resolve ) => {
        setTimeout(() => {
                resolve ('click  click  click');


        },8000)
    })

}

function goSleep() {
    return new Promise((resolve ) => {
        setTimeout(() => {
            resolve ('snore snore snore');


        },4000)
    })

}


Up(true)
.then(morning =>{
    console.log(morning);

    return goEat('fried eggs')
})
    .then( eat => {
        console.log(eat);

        console.log ('deliciously')

        return goWork()
    })

       .then(completedTask => {
           console.log(completedTask);

           return goEat('borsch')
       })
     .then(obid => {
         console.log(obid)

         console.log ('deliciously')

         return goWork()
     })

    .then(completedTask => {
        console.log(completedTask);



        return goEat('risotto')
    })

    .then (dinner => {
        console.log(dinner);

        console.log ('deliciously')

        return goSleep()
    })

    .then (sleep =>{
        console.log(sleep)
    })

.catch(reason => {
    console.log ('ERRRRROPOOOR' , reason)
})
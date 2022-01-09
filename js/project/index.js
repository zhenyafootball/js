let usersDiv = document.getElementsByClassName('users')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {

        for (const userItem  of users) {
            let userDiv = document.createElement(`div`);
            userDiv.classList.add(`user`);



            let userIdDiv = document.createElement('div')
            userIdDiv.innerText = 'id-' +userItem.id ;

            let userNameDiv = document.createElement('div')
            userNameDiv.innerText = '"name " : ' + userItem.name

            let userUsernameDiv = document.createElement('div')
            userUsernameDiv.innerText ='"username" : ' + userItem.username

            let userEmailDiv = document.createElement('div')
            userEmailDiv.innerText = '"email" :' +  userItem.email

            let userAddressDiv = document.createElement('div')
            userAddressDiv.innerText ='"address " :'

            let userStreetDiv = document.createElement('div')
            userStreetDiv.innerText = '"street" :' + userItem.address.street

            let userSuiteDiv = document.createElement('div')
            userSuiteDiv.innerText = '"suite" :' + userItem.address.suite

            let userCityDiv = document.createElement('div')
            userCityDiv.innerText ='   "city" :' +  userItem.address.city

            let userZipcodeDiv = document.createElement('div')
            userZipcodeDiv.innerText = '"Zipcode" :' +  userItem.address.zipcode

            let userGeoDiv = document.createElement('div')
            userGeoDiv.innerText = '"geo" :'

            let userLatDiv = document.createElement('div')
            userLatDiv.innerText = '"lat" : ' + userItem.address.geo.lat

            let userLngDiv = document.createElement('div')
            userLngDiv.innerText = '"lng " : ' + userItem.address.geo.lng

            let userPhoneDiv = document.createElement('div')
            userPhoneDiv.innerText = '"phone" :' + userItem.phone

            let userWebsiteDiv = document.createElement('div')
            userWebsiteDiv.innerText = '"website" :' + userItem.website

            let userCompanyDiv = document.createElement('div')
            userCompanyDiv.innerText = '"company" :'

            let userNameCompanyDiv = document.createElement('div')
            userNameCompanyDiv.innerText = '"name" : ' + userItem.company.name

            let userCatchPhraseDiv = document.createElement('div')
            userCatchPhraseDiv.innerText = '"catchPhrase" :' + userItem.company.catchPhrase

            let userBsDiv = document.createElement('div')
            userBsDiv.innerText = '"bs" :' + userItem.company.bs

            let button = document.createElement('button');
            button.innerText = 'click';
            button.classList.add('click')

            button.onclick = function () {
                localStorage.setItem('users', JSON.stringify(userItem.id))
                window.location.href = 'user-details.html'

            }









            userDiv.append( userIdDiv, userNameDiv, userUsernameDiv, userEmailDiv,  )
            userDiv.append(userAddressDiv,userStreetDiv,userSuiteDiv,userCityDiv,userZipcodeDiv ,userGeoDiv , userLatDiv , userLngDiv, userPhoneDiv , userWebsiteDiv , userCompanyDiv, userNameCompanyDiv,userCatchPhraseDiv, userBsDiv ,button)
            usersDiv.appendChild(userDiv);

        }
    })


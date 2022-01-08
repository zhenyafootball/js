



let postsDiv = document.getElementsByClassName('posts')[0]
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        for (const postItem of value) {
            let postDiv = document.createElement('div')
            postDiv.innerText = `post id- ${postItem.id}; ${postItem.body}; ${postItem.title}`;
            let button = document.createElement('button');
            button.innerText = 'post of current user';
            button.onclick = function () {


                fetch(`https://jsonplaceholder.typicode.com/users/${postItem.id}/posts`)
                    .then(value => value.json())
                    .then(value => {
                        let titlesDiv = document.createElement('div')
                        titlesDiv.classList.add('post-comments');
                        for (const titleItem of value) {
                            let title = document.createElement('div')
                            title.innerText = titleItem.title
                            titlesDiv.appendChild(title)
                        }

                        postDiv.appendChild(titlesDiv)


                    })

            }
            let top = document.createElement('top');
            top.innerText = 'Tap';
            top.classList.add('Tap')

            top.onclick = function () {
                localStorage.setItem('posts', JSON.stringify(postItem.id))
                window.location.href = `post-details.html`

            }


                postDiv.append(button,top);
                postsDiv.appendChild(postDiv);





        }
    })


let userDetails = JSON.parse(localStorage.getItem('userDetails'));
console.log(userDetails);
for(const userDetail of userDetails) {
    let div = document.createElement('div')
    div.innerText = JSON.stringify(userDetail);
    document.body.appendChild(div);
}
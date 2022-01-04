
let userDetails = JSON.parse(localStorage.getItem('userDetails'));
console.log(userDetails);
for(const userDetail of userDetails) {
    let div = document.createElement('div')
    div.innerText = JSON.stringify(userDetail);
    document.body.appendChild(div);
}






let postsDiv = document.getElementsByClassName('posts')[0]
fetch('https://jsonplaceholder.typicode.com/posts')
   .then(value => value.json())
   .then(value => {
       for (const postItem of value) {
           let postDiv = document.createElement('div')
           postDiv.innerText = 'post id- ${postItem.id}; ${postItem.body}; ${postItem.title}';
           let button = document.createElement('button');
           button.innerText = 'post of current user';
           button.onclick = function () {


               fetch('https://jsonplaceholder.typicode.com/users/USER_ID/posts')
                   .then(value => value.json() )
                   .then(value => {
                       let commentsDiv= document.createElement('div')
                       commentsDiv.classList.add('post-comments');
                        for (const commentItem of value) {
                            let comment = document.createElement('div')
                            comment.innerText = commentItem.title
                            commentsDiv.appendChild(comment)
                        }

                       postDiv.appendChild(commentsDiv)


                   })

           }

           let button1 = document.createElement('button');
           button.innerText = 'click';
           button.onclick = function () {
               let postDetails = JSON.parse(localStorage.getItem('postDetails')) || [];
               postDetails.push(postItem);
               localStorage.setItem('postDetails',JSON.stringify(postDetails));

           }

            postDiv.append(button,button1);
           // postsDiv.appendChild(postDiv);
       }

   })
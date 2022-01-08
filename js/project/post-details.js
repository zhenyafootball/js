let postsDiv = document.getElementsByClassName('posts')[0]
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        for (const postItem of value) {
            let postDiv = document.createElement('div')
            postDiv.innerText = `post id- ${postItem.id}; ${postItem.body}; ${postItem.title}`;
            let button = document.createElement('button');
            button.innerText = 'comment';
            button.onclick = function () {


                fetch(`https://jsonplaceholder.typicode.com/posts/${postItem.id}/comments`)
                    .then(value => value.json())
                    .then(value => {
                        let commentsDiv = document.createElement('div')
                        commentsDiv.classList.add('post-comments');
                        for (const commentItem of value) {
                            let comment = document.createElement('div')
                            comment.innerText = commentItem.body
                            commentsDiv.appendChild(comment)
                        }

                        postDiv.appendChild(commentsDiv)


                    })

            }


            postDiv.append(button);
            postsDiv.appendChild(postDiv);





        }
    })
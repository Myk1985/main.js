//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//


const postId = new URL(location.href).searchParams.get('postId');

const detailsBlock = document.getElementById('post-details');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const postDiv = document.createElement('div');
        postDiv.className=`blockInfo`
        for (const key in post) {
            const p = document.createElement('p');
            p.innerHTML = `<b>${key}:</b> <i>${post[key]}</i>`;
            postDiv.appendChild(p);
        }
        detailsBlock.appendChild(postDiv);


        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {

                const commentsDiv = document.createElement('div');
                commentsDiv.className=`commentsInfo`
                comments.forEach(comment => {
                    const p = document.createElement('p');
                    p.className=`comments`
                    p.innerHTML = `<b>Name:</b> <i>${comment.name}</i><br><b>Email:</b> <i>${comment.email}</i><br><b>Body:</b> <i>${comment.body}</i>`;
                    commentsDiv.appendChild(p);
                });
                detailsBlock.appendChild(commentsDiv);
            })

    })

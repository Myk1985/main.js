//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//


const postId = new URL(location.href).searchParams.get('postId');

const detailsBlock = document.getElementById('post-details');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const postUl = document.createElement('ul');
        for (const key in post) {
            const li = document.createElement('li');
            li.innerHTML = `<b>${key}:</b> ${post[key]}`;
            postUl.appendChild(li);
        }
        detailsBlock.appendChild(postUl);


        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {

                const commentsUl = document.createElement('ol');
                comments.forEach(comment => {
                    const li = document.createElement('li');
                    li.innerHTML = `<b>Name:</b> ${comment.name}<br><b>Email:</b> ${comment.email}<br><b>Body:</b> ${comment.body}`;
                    commentsUl.appendChild(li);
                });
                detailsBlock.appendChild(commentsUl);
            })

    })

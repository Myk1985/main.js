// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
let url  = new URL(`http://jsonplaceholder.typicode.com/users`);
fetch(url)
    .then(result => {
        return result.json();
    })

    // 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
    .then((users) => {
        const block = document.getElementsByClassName('wrap')[0];
        for (const user of users) {
            const user_block = document.createElement('div');
            user_block.innerText = `#${user.id} ${user.name}`;
            block.appendChild(user_block);

    // 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
    //
            const button = document.createElement('button');
            button.innerText = 'more info';
            user_block.appendChild(button);

            button.onclick = () => {
                location.href = `user-details.html?userId=${user.id}`;
            }
        }
    });



//
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
const userId = new URL(location.href).searchParams.get('userId');

fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json())
    .then((user) => {
        const block = document.getElementsByClassName('wrap1')[0];
        const ul = document.createElement('ul');
        recursiveBuild(user, ul);
        block.appendChild(ul);
    });

function liCreator(key, value, parent) {
    const li = document.createElement('li');
    li.innerHTML = `<b>${key}:</b> ${value}`;
    parent.appendChild(li);
}

function ulBuilder(key, object, parent) {
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    li.innerHTML = `<b>${key}:</b>`;
    parent.appendChild(li);
    li.appendChild(ul);
    recursiveBuild(object, ul);
}

function recursiveBuild(object, parent) {
    for (const key in object) {
        typeof object[key] === 'object'
            ? ulBuilder(key, object[key], parent)
            : liCreator(key, object[key], parent)
    }
}



// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
fetch(`https://jsonplaceholder.typicode.com/users/USER_ID/posts`)
    .then((posts)=>posts.json())
    .then((titles) =>{
        for (const title of titles) {
            for (const item of title) {


            let blockTitle=document.createElement(`div`);
            blockTitle.className=`wrap2` ;
           let buttonTitle = document.getElementsByClassName(`title`[0]);
           buttonTitle.onclick =()=>{

               location.href=`user-details.html`}


               blockTitle.innerHTML=`<i>userTitle:${item}</i>`
               document.body.appendChild(blockTitle);
           }


        }
    })



//
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)

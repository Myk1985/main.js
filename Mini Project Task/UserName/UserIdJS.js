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
                location.href = `../User - details/user-details.html?userId=${user.id}`;
            }
        }
    });

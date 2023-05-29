// - створити блок,
let div= document.createElement(`div`)
console.log(div)

//     - додати йому класи wrap, collapse, alpha, beta
div.classList.add(`Wrap`);
div.classList.add(`collapse`);
div.classList.add(`alpha`);
div.classList.add(`beta`);


// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background=`pink`;
div.style.color=`green`;
div.style.fontSize=`30px`;
// - додати цей блок в body.
document.body.appendChild(div)
// - клонувати його повністю, та додати клон в body.
document.body.appendChild(div.cloneNode(true))
// - Є масив:
//     ['Main','Products','About us','Contacts']
let array = ['Main','Products','About us','Contacts'];

// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let ul = document.createElement(`ul`);
// for (const element of array) {
//  ul.innerHTML=`(<li></li>)`
// }





// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}];

let div1 =document.createElement(`div`)
div1.classList.add(`class`)
let class1= document.getElementsByClassName(`class`)
for (const item of coursesAndDurationArray) {

    div1.innerText=`${item.title} ${item.monthDuration}`;

}
console.log(div1)



// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------

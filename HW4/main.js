// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squared(a, b) {
    let result = a * b;
    return result

}
          let x =squared(2,3);
          console.log(x)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(a=Math.PI, r) {
              let res = a * r**2;
                  return res
}
            let c = circle ( Math.PI,2 )
            console.log(c)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(a=Math.PI, r, h) {
              let result = 2*a*r*h;
              return result

}
          let d = cylinder( Math.PI, 2,3)
          console.log(d)


// - створити функцію яка приймає масив та виводить кожен його елемент

let users=[123,78,567,`hjjj`,567];
function array1(arr) {
    for (const item of arr) {
        console.log(`item:${item}`)
    }
}
array1(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function parText(text) {
              document.write(`<p>${text}</p>`);
}

parText(`hello`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function uList(text) {
    document.write('<ul>');
document.write(`<li>${text}</li>`,
    `<li>${text}</li>`,
    `<li>${text}</li>`);
     document.write('</ul>');
}
uList(`hi`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function uList1(text, b) {
    document.write('<ul>');
    for (let i = 0; i < b ; i++) {

    document.write(`<li>${text}</li>`);}
    
    document.write('</ul>');


}
uList1(`hi`, 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array =[35,67,`ghj`, 789, undefined]
function liArr(arr) {
    document.write('<ul>');
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

liArr(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let data =[
    {    id: 123,   name: `max`,   age:12},
    {    id:  345,  name: `john`,    age:45},
    {    id: 234,   name: `big`,   age:67},
];
function ind(arr) {
    for (const user of arr) {
        document.write(`<div>id:${user.id}-name:${user.name}-age:${user.age}</div>`)
        
    }

}
ind(data)
// - створити функцію яка повертає найменьше число з масиву
const minNum =[5,8,-8,90,56,-99];
function minElement(arr) {
    let numb = arr[0];
    for (let i = 1; i < arr.length ; i++) {
        if (numb > arr[i]){
            numb = arr[i]
        }
    }
    return numb
}

console.log(minElement(minNum));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
 function sumArr(arr) {
     let result = 0;
     for (const number of arr) {
         result += number;

     }
     return result
 }

console.log(sumArr([1,2,10]));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap (arr,index1,index2) {
    const value=arr[index1];
    const value1=arr[index2];
   arr[index1]=value1;
   arr[index2]=value;
}
   (swap([11,22,33,44],0,1))
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
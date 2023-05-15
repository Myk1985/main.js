// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let s=(a,b)=>a*b;
console.log(s(2,3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let cir =(p,r)=> p*r**2;

console.log(cir(Math.PI,3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cil = (p,r,h)=>2*p*r*h;
console.log(cil(Math.PI,2,3));
// - створити функцію яка приймає масив та виводить кожен його елемент
let array = (arr) =>{
    for (const item of arr) {
        console.log(`item:${item}`)
    }}
array([3,5.78,`hg`,`fghj`,true]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let someText =(text) =>
{
    document.write(`<p>${text}</p>`);
}
someText(`hello`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulText = (text)=>{
    document.write(`<ul>`)
          document.write(`<li>${text}</li>
                          <li>${text}</li>
                          <li>${text}</li>`);

    document.write(`</ul>`);
}
ulText(`hi`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let Textter = (text, b) =>{
    document.write(`<ul>`)
        for (let i = 0; i <b ; i++) {
            document.write(`<li>${text}</li>`);        }
    
    document.write(`</ul>`);

}
Textter(`WTF`,3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let anotherARR =(arr) => {
    for (const item of arr) {
        console.log(item)
    }
}
anotherARR([35,67,`ghj`, 789, undefined])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let data =(arr)=>{
    for (const element of arr) {
        document.write(`<div>id:${element.id} name:${element.name} age:${element.age}</div>`);
        }


}
data([
    {    id: 123,   name: `max`,   age:12},
    {    id:  345,  name: `john`,    age:45},
    {    id: 234,   name: `big`,   age:67},]);
// - створити функцію яка повертає найменьше число з масиву
let minNumber =(arr)=>{
    let num = arr[0];
    for (let i = 1; i < arr.length; i++) {
       if ( num >arr[i]){
        num = arr[i]}

    }
return num
}
console.log(minNumber([5,8,-8,90,-899,56,-99,-789]));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr)=>{
    let summa =0;
    for (let i = 0; i < arr.length; i++) {

            summa += arr[i]
    }
    return summa;
}
console.log(sum([1,2,10,]));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone){
    this.id=id;
    this.surname=surname;
    this.email=email;
    this.phone=phone;


}
let user1=[
    new User(15,`vasya`,`nevasya`,`pesyk@email.com`,2346667),
    new User(2,`Petya`,`nepetya`,`pesyk1@email.com`,3446667),
    new User(13,`Vanya`,`nevanya`,`pesyk2@email.com`,2357667),
    new User(41,`Artem`,`neartem`,`pesyk3@email.com`,2346656),
    new User(52,`Valentina`,`nevalentina`,`pesyk4@email.com`,2345567),
    new User(26,`Htos`,`nehtos`,`pesyk5@email.com`,23466645),
    new User(7,`Roman`,`neroman`,`pesyk6@email.com`,2343967),
    new User(84,`Milan`,`nemilan`,`pesyk7@email.com`,27786667),
    new User(93,`Ruben`,`neruben`,`pesyk8@email.com`,237897),
    new User(20,`Roy`,`neroy`,`pesyk9@email.com`,2367667),

];
console.log(user1)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filter=user1.filter(item=>item.id%2===0)
console.log(filter);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUser = user1.sort((a,b)=>a.id-b.id);
console.log(sortUser);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;

    }

}
let client =[
    new Client(15,`vasya`,`nevasya`,`pesyk@email.com`,2346667, [`book`,`magazine`]),
    new Client(2,`Petya`,`nepetya`,`pesyk1@email.com`,3446667,[`book`,`magazine`]),
    new Client(13,`Vanya`,`nevanya`,`pesyk2@email.com`,2357667,[`book`,`magazine`]),
    new Client(41,`Artem`,`neartem`,`pesyk3@email.com`,2346656,[`book`,`magazine`]),
    new Client(52,`Valentina`,`nevalentina`,`pesyk4@email.com`,2345567,[`book`,`magazine`,`fruit`]),
    new Client(26,`Htos`,`nehtos`,`pesyk5@email.com`,23466645,[`book`,`magazine`]),
    new Client(7,`Roman`,`neroman`,`pesyk6@email.com`,2343967,[`book`,`magazine`]),
    new Client(84,`Milan`,`nemilan`,`pesyk7@email.com`,27786667,[`book`,`magazine`]),
    new Client(93,`Ruben`,`neruben`,`pesyk8@email.com`,237897,[`book`,`magazine`,`melon`,`kiwi`]),
    new Client(20,`Roy`,`neroy`,`pesyk9@email.com`,2367667,[`book`,`magazine`,`apple`]),

    ]

console.log(client)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


let sortClient = client.sort((x,y)=>x.order.length-y.order.length);
console.log(sortClient)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model,made,year,maxSpeed,value){
    this.model=model;
    this.made=made;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.value=value;
    this.drivers=[]


this.drive = function (){
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)}


    this.info = function (){
        console.log(`model:${this.model}`)
        console.log(`year:${this.year}`);
        console.log(`speed:${this.maxSpeed}`);
        console.log(`drive:${JSON.stringify(this.drivers)}`)
    }

    this.increaseMaxSpeed = function (newSpeed){
    this.maxSpeed = this.maxSpeed + newSpeed }


    this.changeYear=function (newValue){
    this.year=newValue
    }

    this.addDriver=function (driver){
        this.drivers.push(driver);}


}
let car=new Car(`bmw`,`bmw`,2015,220,6.0);
console.log(car)
car.drive()
car.info()
car.increaseMaxSpeed(100)
car.info()
car.changeYear(2020)
car.info();
car.addDriver({name:`vasya`})
car.info()
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
// -- changeYear (newValue) - змінює рік випуску на значення newValue

// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car




//
// - (Те саме, тільки через клас)

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
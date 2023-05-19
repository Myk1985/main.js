// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
['hello world', 'lorem ipsum', 'javascript is cool'].map((item) =>
console.log(item.length));
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arr2=['hello world', 'lorem ipsum', 'javascript is cool'].map((item)=>item.toUpperCase());
console.log(arr2)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let arr1=['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'].map((item)=>item.toLowerCase());
console.log(arr1)
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
str=str.trim()
console.log(str)
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
let str1 = 'Ревуть воли як ясла повні';
let toArr = str1.split();
console.log(toArr)


//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let strNew=    [10,8,-7,55,987,-1011,0,1050,0].map((item)=>item.toString());
console.log(strNew)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
let nums = [11,21,3];
let sortNums = nums.sort((a,b)=>a-b);
console.log(nums)
let nums1 = [11,21,3];
let sortNums1 = nums1.sort((a,b)=>b-a);
console.log(nums1)

// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let eche = coursesAndDurationArray.sort((a,b)=>b.monthDuration-a.monthDuration)
console.log(coursesAndDurationArray)
let filterArr = coursesAndDurationArray.filter(item=>item.monthDuration>5)
console.log(filterArr);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let mapElement=coursesAndDurationArray1.map((item,index)=>({id:index+1,...item}));
console.log(mapElement)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)


let cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];

// - знайти піковий туз
let aBlack= cards.find((card)=>card.cardSuit===`spade` && card.value === `ace`);
console.log(aBlack)


// - всі шістки
let sixCard = cards.filter((six)=>six.value===`6`);
console.log(sixCard)
// - всі червоні карти
let red=cards.filter((redcard)=>redcard.color===`red`);
console.log(red)
// - всі буби
let diamontCard = cards.filter((diamnd)=>diamnd.cardSuit===`diamond`);
console.log(diamontCard)
// - всі трефи від 9 та більше
let clubsCard=cards.filter((clubs)=>[`9`,`10`,`jack`,`queen`,`king`,`ace`].includes(clubs.value) && clubs.cardSuit===`clubs`);
console.log(clubsCard)

//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let bloc = cards.reduce((acc,card)=>{
    switch (card.cardSuit ){
        case `spade`:
            acc.spades.push(card);
            break;
        case `diamond`:
        acc.diamonds.push(card);
        break;
        case `heart`:
            acc.hearts.push(card);
            break;
        case `clubs`:
            acc.clubs.push(card);
            break;}
    return acc;

},{spades:[],diamonds:[],hearts:[],clubs:[]})
console.log(bloc);



// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================



//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];




// --написати пошук всіх об'єктів, в який в modules є sass
let sassObj=coursesArray.filter((moD)=>moD.modules.includes(`sass`));
console.log(sassObj)
// --написати пошук всіх об'єктів, в який в modules є docker
let sassObj1=coursesArray.filter((moD)=>moD.modules.includes(`docker`));
console.log(sassObj1)

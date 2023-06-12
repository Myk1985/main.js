// let header =document.createElement(`header`);
// document.header.createElement(`id`);
// id.innerText=`head`;
function clock() {
    let time = new Date().getTime(),
hours=(time.getHours()<10)?`0`+time.getHours():time.getHours,
minutes=(time.getMinutes()<10)?`0`+time.getMinutes():time.getMinutes,
seconds =(time.getSeconds()<10)?`0`+time.getSeconds():time.getSeconds;
    document.getElementById(`head`).innerHTML = hours+`:`+minutes+`:`+seconds;

}
setInterval(clock,1000);





// document.body.appendChild(header);
// header.style.display=`flex`;
// header.style.justifyContent=`center`;
// header.style.alignContent=`center`;
// header.style.fontSize=`50px`;
// header.style.color=`green`;

// let div = document.createElement(`div`);
// let h2 = document.createElement(`h2`);
//
//
// setTimeout(function (){
//     div.innerText=`rusnya`
//
//
//
// },2500)
// setTimeout(function(greater){
//     h2.innerText=`Welcome to hell`
//
// },3000);
// div.appendChild(h2);
// document.body.appendChild(div)
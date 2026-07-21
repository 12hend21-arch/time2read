/****************************/
/* TIME2READ JAVASCRIPT */
/****************************/


// LOADING SCREEN

window.addEventListener("load", function(){

const loader = document.getElementById("loading-screen");

if(loader){

setTimeout(()=>{

loader.style.display="none";

},2000);

}

});





/****************************/
/* TYPING EFFECT */
/****************************/


const typingText = document.getElementById("typing-text");

const messages = [

"The Future Of Reading Starts Here",

"Discover Your Next Favorite Book",

"Read More. Learn More. Grow More",

"Welcome To Time2Read"

];


let messageIndex = 0;

let charIndex = 0;


function typeEffect(){


if(!typingText) return;


if(charIndex < messages[messageIndex].length){

typingText.textContent += messages[messageIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);


}

else{


setTimeout(()=>{

typingText.textContent="";

charIndex=0;

messageIndex++;


if(messageIndex >= messages.length){

messageIndex=0;

}


typeEffect();


},1500);


}


}


typeEffect();





/****************************/
/* DARK MODE */
/****************************/


const darkBtn = document.getElementById("darkModeBtn");


if(darkBtn){


darkBtn.addEventListener("click",()=>{


document.body.classList.toggle("light-mode");


});


}

/****************************/
/* COUNTDOWN TIMER */
/****************************/


let offerDate = new Date();

offerDate.setDate(
offerDate.getDate() + 5
);


function updateTimer(){


let now = new Date().getTime();

let distance = offerDate - now;


let days = Math.floor(
distance / (1000 * 60 * 60 * 24)
);


let hours = Math.floor(
(distance % (1000 * 60 * 60 * 24)) /
(1000 * 60 * 60)
);


let minutes = Math.floor(
(distance % (1000 * 60 * 60)) /
(1000 * 60)
);


let seconds = Math.floor(
(distance % (1000 * 60)) /
1000
);



let dayElement =
document.getElementById("days");


let hourElement =
document.getElementById("hours");


let minuteElement =
document.getElementById("minutes");


let secondElement =
document.getElementById("seconds");



if(dayElement)
dayElement.innerHTML = days;


if(hourElement)
hourElement.innerHTML = hours;


if(minuteElement)
minuteElement.innerHTML = minutes;


if(secondElement)
secondElement.innerHTML = seconds;



}



setInterval(updateTimer,1000);





/****************************/
/* SEARCH SYSTEM */
/****************************/


const searchBar =
document.getElementById("searchBar");


const books =
document.querySelectorAll(".book-card");



if(searchBar){


searchBar.addEventListener(
"keyup",
function(){


let value =
searchBar.value.toLowerCase();



books.forEach(book=>{


let text =
book.innerText.toLowerCase();



if(text.includes(value)){


book.style.display="block";


}

else{


book.style.display="none";


}



});


});


}





/****************************/
/* CART SYSTEM */
/****************************/


let cartCount = 0;

let totalPrice = 0;



const cartCounter =
document.getElementById("cart-counter");


const priceElement =
document.getElementById("total-price");



const cartButtons =
document.querySelectorAll(
".book-card button:first-of-type"
);



cartButtons.forEach(button=>{


button.addEventListener(
"click",
()=>{


cartCount++;


totalPrice += 80;



if(cartCounter){

cartCounter.innerHTML =
cartCount;

}



if(priceElement){

priceElement.innerHTML =
totalPrice + " SAR";

}



showNotification(
"Book Added To Cart"
);



});


});

/****************************/
/* NOTIFICATION SYSTEM */
/****************************/


function showNotification(message){


let notification =
document.createElement("div");


notification.className =
"notification-popup";


notification.innerHTML =
message;



document.body.appendChild(
notification
);



setTimeout(()=>{


notification.remove();


},3000);



}





const notificationBtn =
document.getElementById(
"notificationBtn"
);



if(notificationBtn){


notificationBtn.addEventListener(
"click",
()=>{


showNotification(
"🔔 You have new reading rewards!"
);


});


}






/****************************/
/* WISHLIST SYSTEM */
/****************************/


let wishlist = [];



const wishlistButtons =
document.querySelectorAll(
".book-card button:nth-of-type(2)"
);



wishlistButtons.forEach(button=>{


button.addEventListener(
"click",
function(){


let book =
this.parentElement.querySelector("h3").innerText;



wishlist.push(book);



showNotification(
book + " added to wishlist"
);



});


});






/****************************/
/* BACK TO TOP */
/****************************/


const backButton =
document.getElementById(
"backToTop"
);



if(backButton){


backButton.addEventListener(
"click",
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}






/****************************/
/* COUPON GENERATOR */
/****************************/


const couponButton =
document.querySelector(
".secret-discount button"
);



if(couponButton){


couponButton.addEventListener(
"click",
()=>{


let coupons=[

"READ10",

"BOOK20",

"TIME25",

"FUTURE30"

];



let randomCoupon =
coupons[
Math.floor(
Math.random()*coupons.length
)
];



showNotification(
"Your Coupon: " + randomCoupon
);



});


}






/****************************/
/* RANDOM BOOK PICKER */
/****************************/


const randomButton =
document.querySelector(
".random-book button"
);



if(randomButton){


randomButton.addEventListener(
"click",
()=>{


let booksNames=[

"Atomic Habits",

"Clean Code",

"Deep Work",

"The Psychology Of Money",

"Rich Dad Poor Dad",

"Python Crash Course"

];



let randomBook =
booksNames[
Math.floor(
Math.random()*booksNames.length
)
];



showNotification(
"Recommended: " + randomBook
);



});


}

/****************************/
/* XP SYSTEM */
/****************************/


let xp = 3500;



const xpButton =
document.querySelector(
".xp-system button"
);



if(xpButton){


xpButton.addEventListener(
"click",
()=>{


xp += 100;


showNotification(
"+100 XP Earned! Total XP: " + xp
);



});


}






/****************************/
/* DAILY REWARD SYSTEM */
/****************************/


const rewardButton =
document.querySelector(
".daily-rewards button"
);



if(rewardButton){


rewardButton.addEventListener(
"click",
()=>{


let rewards=[

"50 XP",

"10% Discount",

"Free Book Coupon",

"Premium Badge"

];



let reward =
rewards[
Math.floor(
Math.random()*rewards.length
)
];



showNotification(
"🎁 Reward: " + reward
);



});


}






/****************************/
/* READING CHALLENGE */
/****************************/


const challengeButton =
document.querySelector(
".reading-challenge button"
);



if(challengeButton){


challengeButton.addEventListener(
"click",
()=>{


showNotification(
"📚 Challenge Started: Read 30 pages today!"
);



});


}






/****************************/
/* QUOTE GENERATOR */
/****************************/


const quoteButton =
document.querySelector(
".quotes-section button"
);



if(quoteButton){


quoteButton.addEventListener(
"click",
()=>{


let quotes=[

"Reading expands your imagination.",

"Every book opens a new world.",

"Small reading habits create big changes.",

"Knowledge begins with curiosity."

];



let quote =
quotes[
Math.floor(
Math.random()*quotes.length
)
];



showNotification(
quote
);



});


}






/****************************/
/* SPIN AND WIN */
/****************************/


const spinButton =
document.querySelector(
".spin-wheel button"
);



if(spinButton){


spinButton.addEventListener(
"click",
()=>{


let prizes=[

"10% OFF",

"20% OFF",

"50 XP",

"Free Shipping",

"VIP Badge"

];



let prize =
prizes[
Math.floor(
Math.random()*prizes.length
)
];



showNotification(
"🎯 You Won: " + prize
);



});


}





/****************************/
/* AI BOOK FINDER */
/****************************/


const aiButton =
document.querySelector(
".ai-book-finder button"
);



if(aiButton){


aiButton.addEventListener(
"click",
()=>{


showNotification(
"AI Suggestion: Try Atomic Habits!"
);



});


}

/****************************/
/* LIGHT MODE */
/****************************/


const lightStyle = document.createElement("style");


lightStyle.innerHTML = `

.light-mode{

background:
linear-gradient(
135deg,
#ffffff,
#dffcff
);

color:#111;

}


.light-mode p,

.light-mode li,

.light-mode h3{

color:#111;

}


.light-mode .book-card,

.light-mode .membership-card,

.light-mode .dashboard{

background:
rgba(0,0,0,0.08);

}

`;



document.head.appendChild(
lightStyle
);






/****************************/
/* SCROLL ANIMATION */
/****************************/


const sections =
document.querySelectorAll(
"section"
);



function revealSections(){


sections.forEach(section=>{


let position =
section.getBoundingClientRect()
.top;


let screen =
window.innerHeight;



if(position < screen - 100){


section.style.opacity="1";

section.style.transform=
"translateY(0)";


}


});


}



sections.forEach(section=>{


section.style.opacity="0";

section.style.transform=
"translateY(50px)";

section.style.transition=
"1s";


});



window.addEventListener(
"scroll",
revealSections
);


revealSections();







/****************************/
/* SAVE WISHLIST */
/****************************/


function saveWishlist(){


localStorage.setItem(

"time2readWishlist",

JSON.stringify(wishlist)

);


}



setInterval(
saveWishlist,
3000
);







/****************************/
/* LOAD WISHLIST */
/****************************/


let savedWishlist =
localStorage.getItem(
"time2readWishlist"
);



if(savedWishlist){


wishlist =
JSON.parse(savedWishlist);


}






/****************************/
/* CONSOLE MESSAGE */
/****************************/


console.log(

"🚀 Welcome To Time2Read - Future Reading Platform"

);



console.log(

"HTML + CSS + JavaScript Project Completed"

);
let tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.textColor = "#fff";
tg.MainButton.color = "#2cab37";

let item = ""

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");
let btn11= document.getElementById("btn11");
let btn12 = document.getElementById("btn12");
let btn13= document.getElementById("btn13");
let btn14 = document.getElementById("btn14");

btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("вы выбрали тавар 1!")
        item = "1";
        tg.MainButton.show
    }
});
btn2.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("вы выбрали тавар 2!")
        item = "2";
        tg.MainButton.show
    }
});
btn3.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("вы выбрали тавар 3!")
        item = "3";
        tg.MainButton.show
    }
});
btn4.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("вы выбрали тавар 4!")
        item = "4";
        tg.MainButton.show
    }
});
btn5.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("вы выбрали тавар 5!")
        item = "5";
        tg.MainButton.show
    }
});
btn6.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("вы выбрали тавар 6!")
        item = "6";
        tg.MainButton.show
    }
});
btn7.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("вы выбрали тавар 7!")
        item = "7";
        tg.MainButton.show
    }
});
btn8.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("вы выбрали тавар 8!")
        item = "8";
        tg.MainButton.show
    }
});
btn9.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("вы выбрали тавар 9!")
        item = "9";
        tg.MainButton.show
    }
});
btn10.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("вы выбрали тавар 10!")
        item = "10";
        tg.MainButton.show
    }
});
btn11.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("вы выбрали тавар 11!")
        item = "11";
        tg.MainButton.show
    }
});
btn12.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("вы выбрали тавар 12!")
        item = "12";
        tg.MainButton.show
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

let p = document.createElement("p")

p.innerText = `${tg.initDataUnsafe.first_name}
${tg.initDataUnsafe.last_name}`

usercard.appendChild(p);

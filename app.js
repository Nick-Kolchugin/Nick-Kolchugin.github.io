let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = new Map();

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

btn1.addEventListener("click", function(){
    if(!item.has('cheesecake') || item.get('cheesecake') == 0){
        item.set('cheesecake', 1);
    }
    else{
        let count = item.get('cheesecake');
        item.set('cheesecake', count + 1);
    }

    tg.MainButton.setText('Оформить заказ');
    tg.MainButton.show();
});

btn2.addEventListener("click", function(){
    if(!item.has('cake') || item.get('cake') == 0){
        item.set('cake', 1);
    }
    else{
        let count = item.get('cake');
        item.set('cake', count + 1);
    }

    tg.MainButton.setText('Оформить заказ');
    tg.MainButton.show();
});

btn3.addEventListener("click", function(){
    if(!item.has('donut') || item.get('donut') == 0){
        item.set('donut', 1);
    }
    else{
        let count = item.get('donut');
        item.set('donut', count + 1);
    }

    tg.MainButton.setText('Оформить заказ');
    tg.MainButton.show();
});

btn4.addEventListener("click", function(){
    if(!item.has('pancake') || item.get('pancake') == 0){
        item.set('pancake', 1);
    }
    else{
        let count = item.get('pancake');
        item.set('pancake', count + 1);
    }

    tg.MainButton.setText('Оформить заказ');
    tg.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

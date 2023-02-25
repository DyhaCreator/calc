let buffer = "0";
let firstNum = 0;
let secondNum = 0;
let num = 0;
let op = "";
let ansfer = 0;
screen = document.getElementById("screen");

function buttonClick(value){
    if(isNaN(parseInt(value))){
        isNotNum(value);
    }else{
        isNum(value);
    }
    if(num==1){buffer=String(firstNum)+op+String(secondNum);}
    else if(num==0){buffer=String(firstNum)}
    else{buffer=String(ansfer);}
    screen.innerText = buffer;
}

function isNotNum(value){
    console.log(value);
    switch(value){
        case("c"):
            firstNum=0;
            secondNum=0;
            op="";
            num=0;
            break;
        case("q"):
            if(num==0){firstNum=Math.floor(firstNum/10);}
            else{secondNum=Math.floor(secondNum/10);}
            break;
        case("+"):
            num=1;
            op="+";
            break;
        case("-"):
            num=1;
            op="-";
            break;
        case("x"):
            num=1;
            op="×";
            break;
        case("/"):
            num=1;
            op="÷";
            break;
        case("="):
            num=2;
            calculate(op);
            break;
    }
}

function calculate(op){
    switch(op){
        case("+"):
            ansfer=firstNum+secondNum;
            break;
        case("-"):
            ansfer=firstNum-secondNum;
            break;
        case("×"):
            ansfer=firstNum*secondNum;
            break;
        case("÷"):
            ansfer=Math.round(firstNum/secondNum);
            break;
    }
}

function isNum(value){
    if(num==0){firstNum=firstNum*10+parseInt(value);}
    else{secondNum=secondNum*10+parseInt(value)}
}

function init(){
    document.querySelector(".calc-buttons").addEventListener('click',function(event){
        buttonClick(event.target.id);
    })
}
init();
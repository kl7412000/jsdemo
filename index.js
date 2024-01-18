document.write(Date());
let rows = [];
for (let j = 0; j < 5; j++) {
let numbers = [];
while (true) {
    let x = getRandomInt(1, 49);
    if (!numbers.includes(x)) {
    numbers.push(x);
    }
    if (numbers.length == 6) {
    break;
    }
}
//排序
numbers.sort(compare);
rows.push(numbers);
}
//排序方法
function compare(a, b) {
return a - b;
}
console.log(rows);
const lottoryE1emnt=document.querySelector("#lottory");

for (let i = 0; i < rows.length; i++) {
    result = rows[i].join(",");
    console.log(result);
    lottoryE1emnt.innerHTML+=`<h3>第${i + 1}組號碼:${result}</h3><hr>`
    //document.write(`<h3>第${i + 1}組號碼:${result}</h3><hr>`;
}
/*
let rows = [];
//外迴圈(控制組數) =>產生五組號碼
for (let j = 0; j < 5; j++) {
//內迴圈輸出六個號碼
let numbers = [];
for (let i = 0; i < 6; i++) {
    let x = getRandomInt(1, 49);
    //document.write("<h3>第" + (i + 1) + "個號碼為:" + r + "</h3>");
    //使用反引號 ${}，字串加變數用``
    // document.write(`<h3>第${i + 1}個號碼為:${x}</h3>`);
    numbers.push(x);
}
console.log(numbers);
rows.push(numbers);
document.write(`<h3>第${j + 1}組號碼:${numbers}`);
}
*/

let z = null;
console.log(z + 10);

console.log(Math.PI);

//1~10之間的亂數
//0~1浮點數
//0~10 randint(0,10)
//1~49
for (let i = 0; i < 10; i++) {
let r = Math.floor(Math.random() * 49) + 1;
console.log(r);
}

while (true) {
let r = Math.floor(Math.random() * 49) + 1;
console.log(r);
if (r == 49) {
    break;
}
}

//def 函數宣告
function getRandomInt(start, end) {
let r = Math.floor(Math.random() * end) + start;
return r;
}

while (true) {
let r = getRandomInt(1, 49);
console.log(r);
if (r == 49) {
    break;
}
}

A="3.55";
document.write(parseInt(A));
document.write(Number(A));

// object=>json
let user={
    name:"Jimmy",
    height:178.8,
    weight:68.5
}
console.log(user,typeof(user));
console.log(user.name,user['user']);

console.log(getBmi(user.height,user.weight));
console.log(getBmi("qii",100));

//計算BMI函式
function getBmi(height,weight){
    let bmi = weight / (height / 100) ** 2;
    if(isNaN(bmi)){
        return "數值錯誤!!!";
    }
    return bmi.toFixed(2);
}
 


let ch = 60;
let eng = 0;
let math = 60;
//if (ch>=60 or eng>=60) and math >=60:
if ((ch >= 60 || eng >= 60) && math >= 60) {
console.log("pass!");
} else {
console.log("fail~");
}

//使用let優於var
let x = 10;
console.log(x++);
console.log(++x);
//常數宣告
const PI = 3.1415926;

console.log(10 == "10");
console.log(10 === "10");
//型態轉換 Number,String,Boolean
console.log(String(10) === "10");

let email = "jalynn@gmail.com";
console.log(email);
console.log(email.length);
console.log(email[email.length - 1]);
//for i in range(len(email)):
//i++ => i+=1
for (let i = 0; i < email.length; i++) {
//print(i,email[i])
console.log(i, email[i]);
}
//更改元素h1內容
const h1=document.querySelector("h1");
console.log(h1);
h1.innerText="大樂透";
//h1.innerHTML="<u>大樂透</u>";
h1.style.color="blue";
/**
 //計算BMI
let height = prompt("請輸入身高(cm):");
let wight = prompt("請輸入體重(kg):");
let bmi = wight / (height / 100) ** 2;

let result_bmi = "<ur>";
result_bmi += "<li>身高:" + height + "</li>";
result_bmi += "<li>體重:" + wight + "</li>";
// 使用toFixed約束小數點
result_bmi += "<li>BMI:" + bmi.toFixed(2) + "</li>";
console.log("BMI:" + bmi);
result_bmi += "</ul>";
document.write(result_bmi);

//計算園面積
let rad = prompt("請輸入半徑:");
let area = rad * rad * PI;
//字串+數字(自串串接)
let result = "area is " + area;
// 輸出到log
console.log(rad, area, typeof result);
//輸出網頁1.68
document.write("<h2>" + result + "</h2>");
//alert
alert(result);
*/
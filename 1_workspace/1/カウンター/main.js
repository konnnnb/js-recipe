const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const multButton = document.getElementById("mult-button")
const divButton = document.getElementById("div-button")
const clearButton = document.getElementById("clear-button")
const equalButton = document.getElementById("button")
const inputform= document.getElementById("input-form")
//let storage = "";//文字
let result = 0;
let enzan="=";
//let count2 = "";


//+
plusButton.onclick = function(){
  calc();
  enzan = "+"
}

//-
minusButton.onclick = function(){
  calc();
  enzan = "-"
}

//*
multButton.onclick = function(){
  calc();
  enzan = "*"
}

divButton.onclick = function(){
  calc();
  enzan = "/"
}


//clear
clearButton.onclick = function(){
 // storage=null
  display.textContent=0
}

const calc=function(){

  if(enzan === "+"){
    result += Number(inputform.value)
  }else if(enzan === "-"){
    result -= Number(inputform.value)
  }else if(enzan === "*"){
    result *= Number(inputform.value)
  }else if(enzan === "/"){
    result /= Number(inputform.value)
  }else if(enzan === "="){
    result = Number(inputform.value)
  }

  display.textContent = result
  inputform.value = ""
}






// const display = document.getElementById("display")
// const Button = document.getElementById("button")


// let count=0//初期

// // ボタンをクリックしたときの処理を登録
// button.onclick = function(){
//   // ここにクリック後の処理を書く
//   count+=1

//   display.classList.add('red')

//   //count表示
//   display.textContent=count
// }
// window.onload = function (e) {
//   console.dir(e)
// }






//1counter-----------------------------------------------------

// const display = document.getElementById("display")
// const plusButton = document.getElementById("plus-button")
// const minusButton = document.getElementById("minus-button")
// const multButton = document.getElementById("mult-button")

// let count=0//初期

// // ボタンをクリックしたときの処理を登録
// plusButton.onclick = function(){
//   // ここにクリック後の処理を書く
//   count+=1

//   //count表示
//   display.textContent=count
// }

// minusButton.onclick = function(){
//   // ここにクリック後の処理を書く
//   count-=1

//   //count表示
//   display.textContent=count
// }

// multButton.onclick = function(){
//   // ここにクリック後の処理を書く
//   count = count * 2

//   //count表示
//   display.textContent=count
// }
const display = document.getElementById("display")
const button = document.getElementById("button")


let count = 0

const countUp = function(){
    // count を更新
    count += 1
    // count を秒単位にして表示
    if(count % 3 === 0){
    display.textContent = count+"!!!!"
    console.log(count + "!!!!")
    }else{
      display.textContent = count
      console.log(count)
    }
}


//数え上げ３元気
const genkiFunction = function(number){
  setInterval(countUp, 1000)
   for(let n=1; n<=number; n++){
  if (n % 3 === 0) {//同値は=三つ
    console.log(n + "!!!!!!!")
  } else {
    console.log(n)
  }
  }
  }
  genkiFunction(24)



// let count = 0

// const countUp = function(){
//     // count を更新
//     count += 1
//     // count を秒単位にして表示
//     display.textContent = count
// }

// button.onclick = function(){
//     // 10ms ごとに countUp を実行するように登録する
//     setInterval(countUp, 1000)
//     button.textContent = "stop"
// }



// //3が大好き
// const genkiFunction = function(number){
//   for(let n=1; n<=number; n++){
//   let nn=String(n)
//   if (n % 3 === 0) {//同値は=三つ
//     console.log(n + "!!!!!!!")
//   } else if(nn.includes("3")===true){
//     console.log(n+"!!!!!!!!")
//   }else{
//   console.log(n)
//   }
//   }
//   }

// genkiFunction(45)


// //Fizzbazz
// const genkiFunction = function(number){
// for(let n=1; n<=number; n++){
// if (n % 15 === 0) {//同値は=三つ
//   console.log("FizzBuzz")
// } else if(n % 5 === 0){
//   console.log("Buzz")
// }else if(n % 3 === 0){
//   console.log("Fizz")
// }else{
//   console.log(n)
// }
// }
// }
// genkiFunction(45)


//3倍数
// const genkiFunction = function(number){
//   setInterval(countUp, 1000)
//    for(let n=1; n<=number; n++){
//   if (count % 3 === 0) {//同値は=三つ
//     console.log(count + "!!!!!!!")
//   } else {
//     console.log(count)
//   }
//   }
//   }
//   genkiFunction(24)
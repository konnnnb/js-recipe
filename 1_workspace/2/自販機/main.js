const input = document.getElementById("input")
const button=document.getElementById("button")
const tea = document.getElementById("tea")
const milk=document.getElementById("milk")
const coffee=document.getElementById("coffee")
const container = document.getElementById("container")
const real = document.getElementById("real")

let money=0;

const menu ={
  name:['Ryokucha', 'milk','coffee'],
  price:['120','110','130']
}

button.onclick = function(){
  money += Number(input.value)
  real.textContent = money 
  console.log(money)
}

tea.onclick = function(){
  console.log(menu.price[0])
  if(money >= menu.price[0]){
  const e1 = document.createElement("div")
  e1.textContent = "🍵"
container.append(e1);
money -= menu.price[0] 

real.textContent = money 
console.log(money)
}else{
  errorMessage()
}
}

milk.onclick = function(){
  console.log(menu.price[1])
  if(money >= menu.price[1]){
  const e1 = document.createElement("div")
  e1.textContent = "🥛"
container.append(e1);
money -= menu.price[1] 

real.textContent = money 
console.log(money)
}else{
  errorMessage()
}
}

coffee.onclick = function(){
  console.log(menu.price[2])
  if(money >= menu.price[2]){
  const e1 = document.createElement("div")
  e1.textContent = "☕️"
container.append(e1);
money -= menu.price[2] 

real.textContent = money 
console.log(money)
}else{
  errorMessage()
}
}

const errorMessage = function(){
  real.textContent = "お金が足りません"
}

// const button100 = document.getElementById("button-100")
// const ryokucha = document.getElementById("ryokucha")
// const display = document.getElementById("display")
// const moneyDisplay = document.getElementById("money-display")
// const saifuMoneyDisplay = document.getElementById("saifu-money-display")
// const otsuri = document.getElementById("otsuri")
// ​
// // 僕の財布の状態をあらわす値
// let saifuMoney = 1000
// ​
// // 自動販売機の状態をあらわす値（のひとつ）
// let money = 0
// ​
// // 自動販売機のフロー（のひとつ）
// button100.onclick = function() {
//   money += 100
//   moneyDisplay.textContent = money + "円"
//   saifuMoney -= 100
//   saifuMoneyDisplay.textContent = saifuMoney + "円"
// }
// ​
// ryokucha.onclick = function() {
//   if (money >= 150) {
//     // お金をひく
//     money -= 150
//     moneyDisplay.textContent = money + "円"
//     // 商品を出す
//     display.textContent += "🍵"
//   }
// }
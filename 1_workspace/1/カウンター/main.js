const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const multButton = document.getElementById("mult-button")

let count=0//初期

// ボタンをクリックしたときの処理を登録
plusButton.onclick = function(){
  // ここにクリック後の処理を書く
  count+=1

  //count表示
  display.textContent=count
}

minusButton.onclick = function(){
  // ここにクリック後の処理を書く
  count-=1

  //count表示
  display.textContent=count
}

multButton.onclick = function(){
  // ここにクリック後の処理を書く
  count = count * 2

  //count表示
  display.textContent=count
}
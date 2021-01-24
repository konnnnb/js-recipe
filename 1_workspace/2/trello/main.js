const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")
let list=[] 
// 追加ボタンを押したときの処理を登録
addButton.onclick = function(){
  // カードを作成する
  const card = createCard(inputElement.value)
  container.append(card)

//入力されたものをlist配列に入れて
  list.push(inputElement.value);
  localStorage["ex"]=JSON.stringify(list)

  // 入力欄を空にする
  inputElement.value = ''



}
//reloadしてもlocalstorageに保存されていた配列内容を表示
window.onload = function () { 
  //localstorageから取り出す
 list= JSON.parse(localStorage["ex"])
 console.log(list)
//1つずつ
 for(let i= 0;i<list.length;i++){
   const card = createCard(list[i])
   container.append(card)
 }
}


// const list=[] 
// list.push(inputElement.value);
// localStorage["ex"]=JSON.stringify(list)



//enterkey
function enter(e){
  if(e === 13){
    const card = createCard(inputElement.value)
    container.append(card)
  
    // 入力欄を空にする
    inputElement.value = ''
  }
  }


// 共通の処理：テキストからカードを作成する
const createCard = function(text){
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function(){
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}








// const inputElement = document.getElementById("input-todo")
// const container = document.getElementById("cards-container")
// const addButton = document.getElementById("add-button")

// // 追加ボタンを押したら
// addButton.onclick = function(){
//   // 入力欄の値（テキスト）をとりだして、 text にいれる
//   const text = inputElement.value
//   console.log(text)
//   // card を作成
//   const card = document.createElement("div")
//   card.className = "card"

//   // todo を作成
//   const todo = document.createElement("div")
//   todo.className = "todo"
//   todo.textContent = text

//   // todo を card の中に追加する
//   card.append(todo)

//   // 削除ボタン を作成
// const deleteButton = document.createElement("div")
// deleteButton.className = "delete"

// // 削除ボタン を押したときの処理を登録
// deleteButton.onclick = function(){
//   // カードを削除する
//   card.remove()
// }

// // 削除ボタン を card の中に追加する
// card.append(deleteButton)

//   // card を container の中に追加する
//   container.append(card)

//   // 入力欄を空にする
//   inputElement.value = ''
// }
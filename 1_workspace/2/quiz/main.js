const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
// const choice1 = document.getElementById("choice-1")
// const choice2 = document.getElementById("choice-2")
// const choice3 = document.getElementById("choice-3")
// const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")



// クイズの内容
const quiz = {
  text: "この料理の一番美味しかった部分はどこでしょう？",
  image: "Sand.jpg",
  choices: [
    {
      text: "ポテト",
      feedback: "残念！塩味はちょうど良かったです"
    },
    {
      text: "卵",
      feedback: "残念！美味しい甘さだったよ"
    },
    {
      text: "パン",
      feedback: "正解！今までのサンドの食パンの中で一番だった！"
    },
    {
      text:"ドリア",
      feedback: "残念！辛いドリアでした。"
    }
  ]
}


const number = quiz.choices.length;
  // // カードの枠を作る
  const card = document.createElement("div")
  //feedbackIDの前にdiv挿入
  feedback.before(card)
   card.id = "card"



  // 削除ボタンを作る
  const choice1=document.createElement("button");
  const choice2=document.createElement("button");
  const choice3=document.createElement("button");
  const choice4=document.createElement("button");

  for(let i=1;i<=number;i++){
  if(i===1){
  choice1.type="button"
  choice1.id = "choice-1"
  card.appendChild(choice1)
  }else if(i===2){
    choice2.type="button"
    choice2.id = "choice-2"
    card.appendChild(choice2)
  }else if(i===3){
    choice3.type="button"
    choice3.id = "choice-3"
    card.appendChild(choice3)
  }else{
    choice4.type="button"
    choice4.id = "choice-4"
    card.appendChild(choice4)
  }
  console.log(choice3.id)
}




// quiz を画面に表示する関数
const reloadQuiz = function(){
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text
}

// choiceNumber番目の選択肢を選択
const choose = function(choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function() {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function() {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function() {
  // 2 番目の選択肢を選択
  choose(2)
}
choice4.onclick = function() {
  // 2 番目の選択肢を選択
  choose(3)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()


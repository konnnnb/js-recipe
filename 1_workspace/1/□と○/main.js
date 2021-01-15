const figure = document.getElementById("figure")
const square = document.getElementById("square")
const circle = document.getElementById("circle")

//□ → ○ → △ → □
// もしclassにroundedを持っていたらremove square,add triangle, remove rounded
// もしclassにsquareを持っていたらadd rounded
// もしclassにtriangleを持っていたらadd square,remove triangle
figure.onclick = function(){

if(figure.classList.contains('rounded') == true){
  figure.classList.remove('square')
  figure.classList.add('triangle')
  figure.classList.remove('rounded')
}else if(figure.classList.contains('square') == true){
  figure.classList.add('rounded')
}else if(figure.classList.contains('triangle') == true){
  figure.classList.add('square')
  figure.classList.remove('triangle')
}
}

//------------------------------------------------------------------------

//いろんなイベント
// figure.onmouseover = function(){
//   figure.classList.toggle('rounded')
// }

// figure.ondbclick = function(){
//   figure.classList.toggle('rounded')
// }

//------------------------------------------------------------------------

// const squareButton = document.getElementById("square-button")
// const circleButton = document.getElementById("circle-button")

// circleButton.onclick = function (){
//     // figure に rounded クラスを追加する
//     figure.classList.add('rounded')
// }
//
// squareButton.onclick = function (){
//     // figure から rounded クラスを削除する
//     figure.classList.remove('rounded')
// }
 console.log( figure.classList );
// figure.onclick = function(){
//
//   //figure.classList.remove('square')
//   figure.classList.add('rounded')
// }

const choice1=document.getElementById('choice1')
const choice2=document.getElementById('choice2')
const choice3=document.getElementById('choice3')
const feedback=document.getElementById('feedback')

choice1.onclick=function(){
  feedback.textContent="正解！\nコンビニのペットボトルのお茶よりティーパック派です(ジャスミン茶は)"
}
choice2.onclick=function(){
  feedback.textContent="不正解"
}
choice3.onclick=function(){
  feedback.textContent="不正解"
}


const miyako = {
  name: "miyako",
  age: 20,
  hobbies: ["散歩","音楽","食"],
  name: {
    first: "miyako",
    last: "kobayashi"
  },
  Hello: function(){
    console.log("ライブ行きたい");
  },
}

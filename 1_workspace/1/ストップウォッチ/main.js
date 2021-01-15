const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function(){
    // count を更新
    count += 1
    // count を秒単位にして表示
    display.textContent = count/100//0.53/2.13
}


let id = null

button.onclick = function(){
    if (id === null) { // start
        id = setInterval(countUp, 10)
        button.textContent = "stop"
    } else { // stop
        clearInterval(id)//タイマー識別,どのタイマー消すか
        id = null
        button.textContent = "start"
    }
}


//追加削除の繰り返し処理時間が徐々に影響？
//http://leo.nit.ac.jp/~tamura/net-ex/javascriptclock.html
//ずれ理由わからない
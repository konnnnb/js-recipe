const color = document.getElementsByClassName("modal-wrapper");
const sanpo = document.getElementById("sanpo");

let x = 70;
let y = 1500;

document.write( '<img id="piyo" src="images/piyo.PNG">' );
 
//なにかキーが押されたとき、keydownfuncという関数を呼び出す
document.body.addEventListener( "keydown", piyoMove);
function piyoMove(e){

	let key = e.key;
 if(key === "Shift"){ x-= Math.floor(Math.random()*10)+10;}
 if(key === "Enter"){ y+= Math.floor(Math.cos(Math.random()*16)*10)+10;}
	if( key === "z" ) {x -= 10;}		
	if( key === "s" ) {y -= 10;	}	
  if( key === "c" ) {x += 10;}		
  if( key === "x" ) {y += 10;	}	
  console.log(key+" dd "+x+" aa "+y)
 
	document.getElementById("piyo").style.top = y + "px";
	document.getElementById("piyo").style.left = x + "px";
 
}

sanpo.style.color = "WHITE"
// const hide = document.getElementsByClassName("hidden_show");
// const  pp = document.createElement("p");
// pp.className = "hidp"
// pp.innerHTML="koko"


// function btn1(){
//   console.log("ggg")
//   const b = document.createElement("div");
//   b.className = b1;
//   const ig = document.createElement("img");
//   ig.src = "images/school.png"
//   ig.height=70;
//   ig.width=70;
//   b.appendChild(ig);
//   const h = document.createElement("h1");
//   h.textContent="qqqq"
//   b.appendChild(h);
//   const pp = document.createElement("p");
//   pp.textContent="wwwww"
//   b.appendChild(pp);
// }
// btn1.style.border=""
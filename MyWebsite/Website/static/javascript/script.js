const body = document.body;

const aboutbtn = document.querySelector(".about")
aboutbtn.addEventListener("click",() => {
  document.querySelector("#about").scrollIntoView({behavior:'smooth'});
})

const skillsbtn = document.querySelector(".skills")
skillsbtn.addEventListener("click",() => {
  document.querySelector("#skills").scrollIntoView({behavior:'smooth'});
})
const projectsbtn = document.querySelector(".projects")
projectsbtn.addEventListener("click",() => {
  document.querySelector("#projects").scrollIntoView({behavior:'smooth'});
})
const contactbtn = document.querySelector(".contact")
contactbtn.addEventListener("click",() => {
  document.querySelector("#contact").scrollIntoView({behavior:'smooth'});
})



























/*

<!-- Keyboard Game
    <div class="type-game-container">
      <div class="text-box">
        <span class="before"></span>
        <span class="current"> </span>
        <span class="after"> </span>
      </div>
      <div class="type-container">
        <div class="input-box-container">
          <input type="text" class="input-box" />
        </div>
      </div>
    </div>
    -->



    /* Typing Game */
/*
.type-game-container {
  width: fit-content;
  height: fit-content;
  margin: 50px auto;
  background: black;
  border: green 1px solid;
  padding: 10px;
  font-weight: 1000;
  font-size: 1em;
}

.type-container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.input-box-container {
  width: 75%;
}

.input-box {
  width: 100%;
}

.text-box {
  display: inline-block;
  font-size: 0px;
  color: white;
}

.before {
  color: green;
  font-size: 25px;
}
.current {
  font-size: 25px;
}

.after {
  font-size: 25px;
}

.span {
  display: inline-block;
}

                       /*Typing Game end





const input = document.querySelector(".input-box");

let before = document.querySelector(".before");
let current = document.querySelector(".current");
let after = document.querySelector(".after");

function GrabNextWord() {
  for (let i = 0; i < after.innerText.length; i++) {
    if (after.innerText[i] == " ") {
      current.innerHTML = after.innerText.slice(0, i) + "&nbsp";
      after.innerHTML = after.innerText.slice(i + 1, after.innerText.length);
      return;
    }
  }
  current.innerHTML = after.innerText;
  after.innerHTML = "";
}
function MoveIntoBefore() {
  before.innerText = before.innerText + current.innerText;
  current.innerText = "";
}

function CheckInput() {
  console.log(input.value);
  for (let i = 0; i < input.value.length; i++) {
    if (input.value[i] == " ") {
      if (input.value.length == current.innerText.length) {
        let mistake = false;
        for (let j = 0; j < i; j++) {
          if (input.value[j] != current.innerText[j]) {
            mistake = true;
          }
        }
        if (mistake == false) {
          MoveIntoBefore();
          GrabNextWord();
          input.value = input.value.slice(i + 1, input.value.length);
          return;
        }
      }
      return;
    }
  }
}
function GameLoop() {
  if (temp != input.value) {
    temp = input.value;
    CheckInput();
  }
}

function Start() {
  after.innerText = textlist[0];
  GrabNextWord();
  Endless();
}

//Runs every 0.25 seconds
function Endless() {
  setTimeout(function () {
    GameLoop();
    Endless();
  }, 50);
}

let temp = "";
textlist = [
  "The method takes 2 parameters: the start position, and the end position (end not included).This example slices out a portion of a string from position 7 to position 12 (13-1)",
];

Start();

/*
function GameLoop() {
    if (currentText[0] == input.value[0]){
        temp = currentText[0]
        beforeText = beforeText+temp
        currentText = currentText.slice(1,currentText.length)
        if (currentText.length == 0) {
            input.value = input.value.slice(1,input.value.length)
            return
        }

        if (currentText[0] == " ") {
            current.innerHTML = "&nbsp"+ currentText.slice(1,currentText.length)
        }else{
            current.innerText = currentText
        }
        before.innerText = beforeText
        input.value = input.value.slice(1,input.value.length)
    }
}



c = document.querySelector(".inputPanel").querySelector("tbody").querySelector("tr").querySelector("td").querySelector("table").querySelector("tbody").querySelector("tr").querySelector("td").querySelector("div").querySelector("div");
t = document.querySelector(".txtInput");
number = c.childElementCount;
if (number == 2) {
setTimeout(function() {t.value = (c.children[1].innerText + " " + c.children[2].innerText);},0)
}else {
    
setTimeout(function() {t.value = (c.children[0].innerText + c.children[1].innerText + c.children[2].innerText);},0);
}
*/
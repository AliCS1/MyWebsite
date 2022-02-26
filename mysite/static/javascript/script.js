const body = document.body;
/*
toolbar = document.querySelector(".toolbar")

toolbarWrap = document.querySelector(".toolbar-wrap")
let toolbarClicked = true;
let toolbarOpened = false;
document.addEventListener("click", () => {
  if (toolbarClicked == true){
    if (toolbarWrap.classList.contains("hidden")) {
      console.log("the toolbar is meant to be hidden")
    }
    toolbarWrap.className = "toolbar-wrap hidden";
    
  }else {
    toolbarWrap.className = "toolbar-wrap"
  }
  console.log("clicked doucment")
})
toolbar.addEventListener("click", () => {
  toolbarClicked = true;
  if (toolbarOpened )
})




*/



































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

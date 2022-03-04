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

const appear = document.querySelectorAll(".appear");
const c = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('animate');
    }
  });
}

const i = new IntersectionObserver(c);

//About Page
for (let j=0;j<appear.length;j++) {
 i.observe(appear[j])
}

const bar = document.querySelectorAll(".bar")
const d = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      if (number < 8) {
        if (entry.target.classList.contains("exist")) {
        }else {
          
      entry.target.classList.add(a);
      entry.target.classList.add("exist");
      a = a + count
      console.log(a)
      number += 1

        }
      }
    }
  });
}
let a = "animate-bar-i";
let count = "i";
let number = 0;
const k = new IntersectionObserver(d)
for (let j=0;j<bar.length;j++) {
  k.observe(bar[j])
}





const input = document.querySelector(".input-box");

let before = document.querySelector(".before");
let current = document.querySelector(".current");
let after = document.querySelector(".after");

function GrabNextWord() {
  for (let i = 0; i < after.innerText.length; i++) {
    if (after.innerText[i] == " ") {
      current.innerHTML = after.innerText.slice(0, i) + " ";
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
  "The first ETF was the SPDR S&P 500 ETF (SPY), which tracks the S&P 500 Index, and which remains an actively traded ETF today.",
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

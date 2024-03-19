/******
Generator
******/
function generatePassword() {
  let x = document.getElementById("rangeNumber").value;
  let pass = "";
  let str = "";

  if (document.getElementById('input-cap').checked) {
    str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (document.getElementById('input-let').checked) {
    str += "abcdefghijklmnopqrstuvwxyz";
  }
  if (document.getElementById('input-num').checked) {
    str += "0123456789";
  }
  if (document.getElementById('input-spe').checked) {
    str += "!$#";
  }

  for (let i = 1; i <= x; i++) {
    let char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
  }

  document.getElementById("generated-password").innerText = pass;
}

/******
Copy button
******/
var copybtn = document.getElementById("copy-btn")
var password = document.getElementById("generated-password")

copybtn.onclick = function(){
    navigator.clipboard.writeText(password.innerHTML)
    copybtn.innerHTML = "Copied"
    setTimeout(function(){
        copybtn.innerHTML = "Copy"
    }, 2000)
}

/******
Slider
******/
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
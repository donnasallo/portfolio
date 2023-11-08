const text = "Hi, I'm Donna   ";
let i = 0;
let speed = 250;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("greeting").innerHTML = text.substring(0, i + 1) + '<span id="cursor"></span>';
    i++;
    setTimeout(typeEffect, speed);
  } else {
    document.getElementById("greeting").innerHTML = text + '<span id="cursor"></span>';
  }
}

function blinkCursor() {
  const cursor = document.getElementById('cursor');
  cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
}

document.addEventListener("DOMContentLoaded", function () {
  typeEffect();
  blinkCursor(); // Start blinking the cursor
});

var btn = document.getElementById("click-btn");
var val = document.getElementById("color-hash");
var color = "#ffffff";
val.innerText = "Background Color: " + color;
btn.addEventListener(
  "click",
  function () {
    color =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    document.body.style.backgroundColor = color;
    val.innerText = "Background Color: " + color;
  },
  false
);

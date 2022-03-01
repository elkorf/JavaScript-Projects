var counter = 0;
var count_disp = document.getElementById("count");
var inc = document.getElementById("inc-btn");
var reset = document.getElementById("reset-btn");
var des = document.getElementById("des-btn");
count_disp.innerText = counter;

function checkColor(count) {
  if (count < 0) {
    count_disp.style.color = "red";
  } else if (count > 0) {
    count_disp.style.color = "green";
  } else if (count === 0) {
    count_disp.style.color = "rgb(48, 46, 46)";
  }
}
inc.onclick = () => {
  count_disp.innerText = ++counter;
  checkColor(counter);
};
reset.onclick = () => {
  counter = 0;
  count_disp.innerText = counter;
  count_disp.style.color = "rgb(48, 46, 46)";
};
des.onclick = () => {
  count_disp.innerText = --counter;
  checkColor(counter);
};

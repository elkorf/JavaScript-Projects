let varField = document.querySelector('#pass');
let generate = document.querySelector('#generate');
let copy = document.querySelector('#copy');
let tooltip = document.querySelector('#txt-copy');
var password="";
passwordGenerator = () =>{
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 16;
  password="";
  tooltip.innerText = "Copy";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }
  return password;
}
generate.onclick = () =>{
  passwordGenerator();
  varField.value = password;
}
copy.onclick = () =>{
  if(navigator.clipboard.writeText(password) && password!=""){
    tooltip.innerText="Copied!";
  }
}

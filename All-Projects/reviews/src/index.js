// const url1 = 'https://raw.githubusercontent.com/elkorf/JavaScript-Projects/master/All-Projects/reviews/review-data/michael-dam.txt'
const url = 'https://api.github.com/repos/elkorf/JavaScript-Projects/contents/All-Projects/reviews/review-data';
let reviewText = document.querySelector('#review-txt');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next'); 
let result="";
let counter=0;

window.addEventListener("DOMContentLoaded", async function (e) {
  try {
    const response = await fetch(url);
    result = await response.json();
    reviewText.innerText =  (await (await fetch(result[0].download_url)).text());;
  } catch (err) {
    return console.log(err);
  }
});

next.onclick = async () =>{
  reviewText.innerText =  (await (await fetch(result[(++counter)%4].download_url)).text());
  // console.log((++counter)%4);
}

prev.onclick = async () =>{
  // reviewText.innerText =  (await (await fetch(result[((counter--)+1)%4].download_url)).text());
  if(((counter)%4)==0){
    counter=4;
  }
  // console.log((--counter)%4);
  reviewText.innerText =  (await (await fetch(result[(--counter)%4].download_url)).text());
}
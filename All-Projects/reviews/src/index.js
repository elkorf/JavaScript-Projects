// const url1 = 'https://raw.githubusercontent.com/elkorf/JavaScript-Projects/master/All-Projects/reviews/review-data/michael-dam.txt'
const url = 'https://api.github.com/repos/elkorf/JavaScript-Projects/contents/All-Projects/reviews/review-data';
let reviewText = document.querySelector('#review-txt');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let reviewProfile = document.querySelector('#reviewer-profile');
let reviewerName = document.querySelector('#reviewer-name'); 
let result;
let counter=0;
let reviewer_img="";
let img_str = "./review-data/reviewer-profile/";
window.addEventListener("DOMContentLoaded", async function (e) {
  try {
    const response = await fetch(url);
    result = await response.json();
    reviewText.innerText =  (await (await fetch(result[0].download_url)).text());;
    // console.log(result);
    let chk = img_str+result[0].name;
    reviewProfile.src = chk.substring(0, chk.lastIndexOf(".")) + ".jpg";

    Name = result[0].name;
    Name = Name.replace("-"," ");
    reviewerName.innerText = Name.substring(0, Name.lastIndexOf(".")) + "";
  } catch (err) {
    return console.log(err);
  }
});

next.onclick = async () =>{
  reviewText.innerText = (await (await fetch(result[(++counter)%4].download_url)).text());
  if(result[4].type=="dir"){
    // console.log(result[4].path+"/");
    let chk = img_str+result[(counter)%4].name;
    reviewProfile.src = chk.substring(0, chk.lastIndexOf(".")) + ".jpg";
    Name = result[(counter)%4].name;
    Name = Name.replace("-"," ");
    reviewerName.innerText = Name.substring(0, Name.lastIndexOf(".")) + "";
  }
}

prev.onclick = async () =>{
  // reviewText.innerText =  (await (await fetch(result[((counter--)+1)%4].download_url)).text());
  if(((counter)%4)==0){
    counter=4;
  }
  // console.log((--counter)%4);
  reviewText.innerText =  (await (await fetch(result[(--counter)%4].download_url)).text());
  let chk = img_str+result[(counter)%4].name;
    reviewProfile.src = chk.substring(0, chk.lastIndexOf(".")) + ".jpg";
    Name = result[(counter)%4].name;
    Name = Name.replace("-"," ");
    reviewerName.innerText = Name.substring(0, Name.lastIndexOf(".")) + "";
}
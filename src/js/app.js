const redColor = document.querySelector(".red");
const grayColor = document.getElementsByClassName("gray")[0];
const blackColor = document.querySelector(".black");

const itemTag = document.getElementsByTagName("h3")[0];
const cartButton = document.getElementById("button");
const imgCard = document.querySelector(".product-image");

redColor.addEventListener("click", ()=>{
    itemTag.style.backgroundColor = "red";
    cartButton.style.backgroundColor = "red";
    imgCard.style.backgroundImage = 'url("../../public/img/redcar.jpg")';
});

grayColor.addEventListener("click", ()=>{
    itemTag.style.backgroundColor = "gray";
    cartButton.style.backgroundColor = "gray";
    imgCard.style.backgroundImage = 'url("../../public/img/graycar.jpg")';
});

blackColor.addEventListener("click", ()=>{
    itemTag.style.backgroundColor = "black";
    cartButton.style.backgroundColor = "black";
    imgCard.style.backgroundImage = 'url("../../public/img/blackcar.jpg")';
});
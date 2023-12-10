const redColor = document.querySelector(".red");
const grayColor = document.getElementsByClassName("gray")[0];
const blackColor = document.querySelector(".black");

const changeToRed = function() {
    document.getElementsByTagName("h3")[0].style.backgroundColor = "red";
    document.getElementById("button").style.backgroundColor = "red";
    document.querySelector(".product-image").style.backgroundImage = 'url("../../public/img/redcar.jpg")';
}

const changeToGray = function() {
    document.getElementsByTagName("h3")[0].style.backgroundColor = "gray";
    document.getElementById("button").style.backgroundColor = "gray";
    document.querySelector(".product-image").style.backgroundImage = 'url("../../public/img/graycar.jpg")';
}

const changeToBlack = function(){
    document.getElementsByTagName("h3")[0].style.backgroundColor = "black";
    document.getElementById("button").style.backgroundColor = "black";
    document.querySelector(".product-image").style.backgroundImage = 'url("../../public/img/blackcar.jpg")';
}

window.onload = function(){
    document.querySelector(".red").addEventListener("click", ()=>{
        changeToRed();
    });

    document.getElementsByClassName("gray")[0].addEventListener("click", ()=>{
        changeToGray();
    });

    document.querySelector(".black").addEventListener("click", ()=>{
        changeToBlack();
    });
}

export{changeToRed, changeToGray, changeToBlack};
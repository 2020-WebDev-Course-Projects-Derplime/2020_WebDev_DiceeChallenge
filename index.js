var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image1 = document.getElementsByClassName("img1")[0];
image1.setAttribute("src", `images/dice${randomNumber1}.png`);

var image2 = document.getElementsByClassName("img2")[0];
image2.setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🚩Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerText = "Player 2 Wins!🚩";
}
else {
    document.querySelector("h1").innerText = "Draw!";
}
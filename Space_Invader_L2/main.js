import EnemyController from "./EnemyController";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "./assets/images/space.png";



function game(){
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
    // console.log("test")
}
setInterval(game, 1000/60);
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = new Player(canvas.width/2, canvas.height/2);

let enemies = [
new Enemy(100,100),
new Enemy(400,200),
new Enemy(700,300)
];

function update(){

player.update();

enemies.forEach(e => e.update(player));

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

player.draw(ctx);

enemies.forEach(e => e.draw(ctx));

}

function gameLoop(){

update();
draw();

requestAnimationFrame(gameLoop);

}

gameLoop();

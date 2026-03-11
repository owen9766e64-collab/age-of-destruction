class Enemy{

constructor(x,y){
this.x = x;
this.y = y;
this.size = CONFIG.enemySize;
this.speed = CONFIG.enemySpeed;
}

update(player){

let dx = player.x - this.x;
let dy = player.y - this.y;

this.x += dx * 0.01 * this.speed;
this.y += dy * 0.01 * this.speed;

}

draw(ctx){

ctx.fillStyle="red";
ctx.fillRect(this.x,this.y,this.size,this.size);

}

}

const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

// create score

let score = 0;

// load images

const ground = new Image();
ground.src = "img/unnamed.png";

const appleImg = new Image();
appleImg.src = "img/food.png";


function Snake(){
    let snake
    this.snake = [0];
    
        this.x = 9 * box;
        this.y = 10* box;
    
}

function Apple(){
    
    this.x = Math.floor(Math.random()*14+0) * box;
    this.y = Math.floor(Math.random()*10+1) * box;

};

function Direction(){
    document.addEventListener('keydown', direction);
    function direction(event){
        let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
    
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
        
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
        
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
        
    }
}
    
};

function Collision(head, array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
};

function draw(){
    
    ctx.drawImage(ground,0,0);
   
   for( let i = 0; i < this.snake.length ; i++){
       ctx.fillStyle = ( i == 0 )? "green" : "red";
       ctx.fillRect(snake[i].x,snake[i].y,box,box);
       
       
       ctx.strokeStyle = "blue";
       ctx.strokeRect(snake[i].x,snake[i].y,box,box);
       
   };
   
   ctx.drawImage(appleImg, apple.x, apple.y);

   // old head position
   let snakeX = snake[0].x;
   let snakeY = snake[0].y;
   
   // which direction
   if( d == "LEFT") snakeX -= box;
   if( d == "UP") snakeY -= box;
   if( d == "RIGHT") snakeX += box;
   if( d == "DOWN") snakeY += box;
   
   // if the snake eats the apple
   if(snakeX == apple.x && snakeY == apple.y){
       score+=10;
       apple = {
           x : Math.floor(Math.random()*14+0) * box,
           y : Math.floor(Math.random()*10+1) * box
       }
       // don't remove the tail
   }else{
       // remove the tail
       snake.pop();
   }
   
   // add new Head
   
   let newHead = {
       x : snakeX,
       y : snakeY
   }
   
   // game over
   
    if(snakeX < 0 || snakeX > 13 * box || snakeY < 1*box || snakeY > 10*box || collision(newHead,snake)){
       clearInterval(game);
   
   } 
   
   snake.unshift(newHead);
   
   ctx.fillStyle = "red";
   ctx.font = "40px Changa one";
   ctx.fillText(score,1*box,1*box);

   
};

let speed = 180;

let game = setInterval(draw,speed);
//to deal with keyword
window.addEventListener("keydown", dealWithKeyboard, false);
window.addEventListener("keypress", dealWithKeyboard, false);
window.addEventListener("keyup", dealWithKeyboard, false);
var con = document.getElementById("user_b");
var grid = document.getElementById("grid_id");
var block = document.getElementById("brick_block");
var direction = 39;
var x=0;
var left_vary = 1;
var top_vary = 1;
var left = 100;
var up = 100;
var s_direction = 1;
var over = false;
var refreshIntervalId;
var ispaused = false;
var score = document.getElementById("score_id");
var bricks = new Array();
    bricks.push({"left" : 0,  "up" : 10});
    bricks.push({"left" : 35, "up" : 10});
    bricks.push({"left" : 70, "up" : 10});
    bricks.push({"left" : 105, "up" : 10});
    bricks.push({"left" : 140, "up" : 10});
    bricks.push({"left" : 175, "up" : 10});
    bricks.push({"left" : 210, "up" : 10});
    bricks.push({"left" : 245, "up" : 10});
    bricks.push({"left" : 280, "up" : 10});

    bricks.push({"left" : 0,  "up" : 25});
    bricks.push({"left" : 40, "up" : 25});
    bricks.push({"left" : 80, "up" : 25});
    bricks.push({"left" : 120, "up" : 25});
    bricks.push({"left" : 160, "up" : 25});
    bricks.push({"left" : 200, "up" : 25});
    bricks.push({"left" : 240, "up" : 25});
    bricks.push({"left" : 280, "up" : 25});

    bricks.push({"left" : 0,  "up" : 40});
    bricks.push({"left" : 35, "up" : 40});
    bricks.push({"left" : 70, "up" : 40});
    bricks.push({"left" : 105, "up" : 40});
    bricks.push({"left" : 140, "up" : 40});
    bricks.push({"left" : 175, "up" : 40});
    bricks.push({"left" : 210, "up" : 40});
    bricks.push({"left" : 245, "up" : 40});
    bricks.push({"left" : 280, "up" : 40});
function startGame(){
	  refreshIntervalId = setInterval(function(){
	  con.setAttribute("style","left :"+left+"px;top:"+up+"px");
	  if(left_vary>0) left_vary =1;
	  else left_vary = -1;
	  if(Math.abs(left-x)<15&&Math.abs(up-280)<10){
	  	left_vary = getDirection();
	  	top_vary = -1;
	  }
	  if(up<0){
	  	top_vary = 1;
	  	left_vary = -1 * (left_vary+1)%3;
	  }
	  if(left>300||left<0){
	  	left_vary = -1 * left_vary;
	  }
	  left = left + left_vary;
	  up   = up + top_vary;
	  if(up>290) game_over();
	  for (var i = 0; i < bricks.length; i++) {
	  	if(bricks[i].left<left&&(bricks[i].left+30)>(left)&&Math.abs(bricks[i].up-up)<20){
	  		bricks.splice(i,1);
	  		place_bricks();
	  		console.log(bricks);
		  	top_vary = 1;
		  	left_vary = getDirection();
		  	score.innerText = 26 - bricks.length;
	  		break;
      	}
	  }
},15
);
}
startGame();
function getDirection(){
	return Math.round(Math.random() * (3 - (-3) + 1) - 3);
}
function game_over(){
	over = true;
	clearInterval(refreshIntervalId);
	refreshIntervalId=null;
}
function place_bricks(){
	while (block.firstChild) {
		    block.removeChild(block.firstChild);
		}
	for (var i = 0; i < bricks.length; i++) {
        var node = document.createElement("div");
	  	node.setAttribute("class","brick");
	  	node.setAttribute("style","left:"+bricks[i].left+"px;top:"+bricks[i].up+"px;" );
	  	block.appendChild(node);
	  }
}
place_bricks();
function dealWithKeyboard(e) {
	  direction = e.keyCode;
	  if(direction===32){
	    ispaused = !ispaused;
	    if(ispaused){
		    clearInterval(refreshIntervalId);
		    refreshIntervalId=null;
	    }
	    else
	    	startGame(); 
	    return;
	  }
	  var bar = document.getElementById("bar");
	  if(direction===39){
	  	bar.setAttribute("style","left:"+move(direction)+"px");
	  }
	  else if(direction===37){
	  	bar.setAttribute("style","left:"+move(direction)+"px");
	  }
}
function move(direction){
	if(direction==39&&x<300)
		x+=5;
	else if(x>0)
		x-=5;
	return x;
}
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
var bricks = new Array();
    bricks.push({"left" : 0,  "up" : 10});
    bricks.push({"left" : 40, "up" : 10});
    bricks.push({"left" : 80, "up" : 10});
    bricks.push({"left" : 120, "up" : 10});
    bricks.push({"left" : 160, "up" : 10});
    bricks.push({"left" : 200, "up" : 10});
    bricks.push({"left" : 240, "up" : 10});
    bricks.push({"left" : 280, "up" : 10});
    bricks.push({"left" : 320, "up" : 10});
    bricks.push({"left" : 360, "up" : 10});
    bricks.push({"left" : 400, "up" : 10});
    bricks.push({"left" : 440, "up" : 10});
    bricks.push({"left" : 0,  "up" : 30});
    bricks.push({"left" : 40, "up" : 30});
    bricks.push({"left" : 80, "up" : 30});
    bricks.push({"left" : 120, "up" : 30});
    bricks.push({"left" : 160, "up" : 30});
    bricks.push({"left" : 200, "up" : 30});
    bricks.push({"left" : 240, "up" : 30});
    bricks.push({"left" : 280, "up" : 30});
    bricks.push({"left" : 320, "up" : 30});
    bricks.push({"left" : 360, "up" : 30});
    bricks.push({"left" : 400, "up" : 30});
    bricks.push({"left" : 440, "up" : 30});

var refreshIntervalId = setInterval(function(){
	  con.setAttribute("style","left :"+left+"px;top:"+up+"px");
	  if(Math.abs(left-x)<20&&Math.abs(up-480)<10){
	  	left_vary = getDirection();
	  	top_vary = -1;
	  }
	  if(up<0){
	  	top_vary = 1;
	  	left_vary = -1 * (left_vary+1)%3;
	  }
	  if(left>500||left<0){
	  	left_vary = -1 * left_vary;
	  }
	  left = left + left_vary;
	  up   = up + top_vary;
	  if(up>490) game_over();
	  for (var i = 0; i < bricks.length; i++) {
	  	if(bricks[i].left<left&&(bricks[i].left+30)>(left)&&Math.abs(bricks[i].up-up)<20){
	  		bricks.splice(i,1);
	  		place_bricks();
	  		console.log(bricks);
		  	top_vary = 1;
		  	left_vary = -1 * left_vary;
	  		break;
      	}
	  }
},20
);
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
	  if(over)
	  	return;
	  direction = e.keyCode;
	  var bar = document.getElementById("bar");
	  if(direction===39){
	  	bar.setAttribute("style","left:"+move(direction)+"px");
	  }
	  else if(direction===37){
	  	bar.setAttribute("style","left:"+move(direction)+"px");
	  }
}
function move(direction){
	if(direction==39&&x<500)
		x+=5;
	else if(x>0)
		x-=5;
	return x;
}
function getRandomPoint() {
  return (Math.floor(Math.random() * (385)) + 1);

}
//to deal with keyword
window.addEventListener("keydown", dealWithKeyboard, false);
window.addEventListener("keypress", dealWithKeyboard, false);
window.addEventListener("keyup", dealWithKeyboard, false);
var con = document.getElementById("user_b");
var direction = 39;
var x=0;
var left = 100;
var up = 100;
var s_direction = 1;
setInterval(function(){
	  con.setAttribute("style","left:"+left+"px;top:"+up+"px");
	  if(s_direction===1)
	    up+=1;
	  else 
	  	up-=1;
	  if(Math.abs(left-x)<20&&Math.abs(up-480)<10)
	  	s_direction=2;
	  if(up<0) s_direction=1;
},10);
function dealWithKeyboard(e) {
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
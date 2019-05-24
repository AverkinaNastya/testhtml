var x = 0;
var y = 0;
var pos = '++';
var speed = 40;
var r = 25;
var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

setInterval(function(){
//4 угла	
	if ((x == 0)&&(y==0)) {
		pos = '++';
	}
	if ((x == 0)&&(y+2*r>=canvas.height)) {
		pos = '+-';
	}
	if ((x+2*r>=canvas.width)&&(y == 0)){
		pos = '-+';
	}
	if ((x+2*r>=canvas.width)&&(y+2*r>=canvas.height)) {
		pos = '--';
	}
//сторона b
	if ((y+2*r>=canvas.height)&&(x != 0)&&(x+2*r!=canvas.width)){
		if (pos=='++') {
			pos = '+-';
		}else if (pos=='-+'){
			pos = '--';
		}
	}
//сторона a
	if ((x+2*r!=canvas.width)&&(y == 0)&&(x!=0)){
		if (pos=='+-') {
			pos = '++';
		}else if (pos=='--'){
			pos = '-+';
		}
	}
//сторона c
	if ((x+2*r>=canvas.width)&&(y != 0)&&(y+2*r!=canvas.height)){
		if (pos=='++') {
			pos = '-+';
		}else if (pos=='+-'){
			pos = '--';
		}
	}
//сторона d
	if ((x==0)&&(y != 0)&&(y+2*r!=canvas.height)){
		if (pos=='-+') {
			pos = '++';
		}else if (pos=='--'){
			pos = '+-';
		}
	}
	switch (pos){
		case '++':
			x += speed;
			y += speed;
			break
		case '--':
			x -= speed;
			y -= speed;
			break
		case '+-':
			x += speed;
			y -= speed;
			break
		case '-+':
			x -= speed;
			y += speed;
			break
	}
	ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		ctx.arc(r+x,r+y,r,0, Math.PI * 2);
		ctx.stroke();
},30);
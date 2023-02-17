
var canvas = document.querySelector('canvas')
	;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight
var c = canvas.getContext('2d');



var x = 200;
var dx = 5;
var y  = 400;
var dy = 6;

var radius = 30;
var count = 1;
var count2 = 0;

function animate() {
	requestAnimationFrame(animate);
	//clear the canvas (to have one circle at a time)
	if(count<10){
	c.clearRect(0, 0, innerWidth, innerHeight);
	c.fillStyle = 'green';
	c.fillRect(0, 0, 4000, 40000);
	}
	else if(count>=10 && count<20){
		c.clearRect(0, 0, innerWidth, innerHeight);
		c.fillStyle = 'green';
		c.fillRect(0, 0, 4000, 40000);
		c.arc(400, 400, 2, 0, Math.PI * 2, false);
		c.fillStlye = 'black';
		c.stroke();
		c.fill();
	}else{
		c.clearRect(0, 0, innerWidth, innerHeight);
		c.fillStyle = 'green';
		c.fillRect(0, 0, 4000, 40000);
		c.beginPath();
		c.fillStyle = 'black';
		c.arc(500, 100, 50, 0, Math.PI * 2, false);
		c.fillStlye = 'black';
		c.stroke();
		c.fill();
	}
	

	//change colour
	if(count%2 ==0 && count<20){
		c.beginPath();
		c.fillStyle = 'red';
		c.arc(x, y, radius, 0, Math.PI * 2, false);
		c.strokeStlye = 'black';
		c.stroke();
		c.fill();
	}
	//change colour
	else if(count%3 == 0 && count<20){
		c.beginPath();
		c.fillStyle = 'pink';
		c.arc(x, y, radius, 0, Math.PI * 2, false);
		c.strokeStlye = 'black';
		c.stroke();
		c.fill();
	//change colour
	}else{
		c.beginPath();
		c.fillStyle = 'white';
		c.arc(x, y, radius, 0, Math.PI * 2, false);
		c.strokeStlye = 'black';
		c.stroke();
		c.fill();
	}

	if( (x + radius) > innerWidth || (x-radius) < 0){
		dx = -dx;
		//change direction
		if(count%14 == 0 && count2<2){
			dx = dx;
			dy = -dy;
		}
		count++;
	}
	if( (y + radius) > innerHeight || (y-radius) < 0){
		dy = -dy;
		//change direction
		if(count%14 == 0 && count2<2){
			dx = -dx;
			dy = dy;
		}
		count++

	}
	
	
	
	x = x + dx;
	y = y + dy

}

animate();
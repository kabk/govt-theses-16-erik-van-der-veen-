var canvas = document.getElementById('myCanvas'),
    ctx = canvas.getContext("2d");
    ctx.canvas.width  = window.innerWidth;
  	ctx.canvas.height = window.innerHeight;

var fov = 128,
    viewDist = Math.random() * 5,
    w = canvas.width / (Math.random() * 6),
    h = canvas.height / (Math.random() * 6),
    i, p1, p2,
    grid = 12 + parseInt(Math.random() * 18);
    angle =  -16 * Math.random();

/// create vertical lines
for(i = -grid; i <= grid; i++) {
    p1 = rotateX(i, -grid);
    p2 = rotateX(i, grid);
    ctx.moveTo(p1[0], p1[1]);
    ctx.lineTo(p2[0], p2[1]);
}

/// create horizontal lines
for(i = -grid; i <= grid; i++) {
    p1 = rotateX(-grid, i);
    p2 = rotateX(grid, i);
    ctx.moveTo(p1[0], p1[1]);
    ctx.lineTo(p2[0], p2[1]);
}
    
    ctx.shadowColor = 'rgba(255,255,255,1)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
	ctx.lineWidth = 2;
    ctx.stroke();


function rotateX(x, y) {

	/*var mousePosCorX = mousePos.x / window.innerWidth;
    var mousePosCorY = mousePos.y / window.innerHeight;

    anglecor = -27 * 1;*/
    var rd, ca, sa, ry, rz, f;
    rd = angle * Math.PI / 180;
    ca = Math.cos(rd);
    sa = Math.sin(rd);

    ry = y * ca;
    rz = y * sa;
	
    f = fov / (viewDist + rz);
    x = x * f + w;
    y = ry * f + h;

    return [x, y];
}

    
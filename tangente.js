(function() {
    var canvas = document.getElementById('canvas'),
            context = canvas.getContext('2d');
    window.addEventListener('resize', resizeCanvas, false);
    function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawStuff(); 
    }
    resizeCanvas();

    function drawStuff() {
            
window.onload=function(){
//clock
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = Math.min(canvas.width/2,canvas.height/2);
ctx.translate(canvas.width/2, canvas.height/2);
radius = radius * 0.70;
font="Helvetica"
//To set the Beat in Milliseconds 
setInterval(drawClock, 1000/50);

//Draws the clock layer by layer
function drawClock() {
  drawFace(ctx, radius);
  //drawNumbers(ctx, radius,12,0.15,font,0.75);
  //drawNumbers(ctx, radius,60,0.05,font,0.65);
  drawLogo("NOMOS","Helvetica",0.4,0.15);
  
  //drawDate(ctx, 0.15,radius * 0.5,0,font);
  drawBatons(ctx, radius*0.95,0,0,12,radius*0.02,radius*.08)
  drawBatons(ctx, radius*0.95,0,0,60,radius*0.01,radius*.08)
  drawSubdial(ctx,radius,0,radius*0.5);
  drawBatons(ctx,radius*0.25,0,radius*0.5,12,radius*.01,radius*.04)
  drawTachymeter(ctx,radius)
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var strapwidth = radius*1.1;
  var bezelwidth = radius*1.1;
  var lugwidth = radius*0.1;
  var lugheight = radius*0.1;
  var lugcurve = bezelwidth*.6;
  var crown = radius*0.25;
  var crownticks = 15;
  var grd = ctx.createLinearGradient(-radius, radius, radius, radius);
    // Add colors
    grd.addColorStop(0.000, 'rgba(150, 150, 150, 1.000)');
    grd.addColorStop(0.500, 'rgba(255, 255, 255, 1.000)');
    grd.addColorStop(1.000, 'rgba(153, 153, 153, 1.000)');

  //strap
  ctx.rect(-strapwidth/2,-canvas.height/2,strapwidth,canvas.height*2);
  ctx.fillStyle = '#black';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.stroke();
  
  //lugs USE ctx.scale(-1,1) to flip contxt
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.fillStyle = grd;
    //leftside
    ctx.moveTo(-bezelwidth,0);
    ctx.quadraticCurveTo(-lugcurve,0,-strapwidth/2-lugwidth,-bezelwidth-lugheight);
    ctx.lineTo(-strapwidth/2,(-bezelwidth-lugheight));
    ctx.lineTo(-strapwidth/2,0);
    ctx.fill();
    ctx.stroke();
    ctx.moveTo(-bezelwidth,0);
    ctx.quadraticCurveTo(-lugcurve,0,-strapwidth/2-lugwidth,bezelwidth+lugheight);
    ctx.lineTo(-strapwidth/2,(bezelwidth+lugheight));
    ctx.lineTo(-strapwidth/2,0);
    ctx.fill();
    ctx.stroke();
    //rightside
    ctx.moveTo(bezelwidth,0);
    ctx.quadraticCurveTo(lugcurve,0,strapwidth/2+lugwidth,-bezelwidth-lugheight);
    ctx.lineTo(strapwidth/2,(-bezelwidth-lugheight));
    ctx.lineTo(strapwidth/2,0);
    ctx.fill();
    ctx.stroke();
    ctx.moveTo(bezelwidth,0);
    ctx.quadraticCurveTo(lugcurve,0,strapwidth/2+lugwidth,bezelwidth+lugheight);
    ctx.lineTo(strapwidth/2,(bezelwidth+lugheight));
    ctx.lineTo(strapwidth/2,0);
    ctx.fill();
    ctx.stroke();
  
  //crown
  ctx.beginPath();
  for (num = 1; num < crownticks+1; num++) {
    ctx.rect(bezelwidth,-crown/2, crown/2, num*crown/crownticks);
    ctx.fill();
    ctx.stroke();
  }
  
  //bezel
  ctx.beginPath();
  ctx.arc(0, 0, bezelwidth, 0, 2 * Math.PI);
  ctx.fillStyle = "grd"
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.stroke();

  //dial
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.strokeStyle = "black"
  ctx.stroke();
  ctx.fill();
  
  //center circle
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.06, 0, 2 * Math.PI);
  ctx.fillStyle = "Blue";
  ctx.fill();
  ctx.fillStyle = "Black";
}

function drawTachymeter(ctx, radius) {
  var ang;
  var num;
  var lastnumouter = 12;
  var fontsizetachy = radius*0.2;
  var numbers = [2,4,8,10,12];
  var nlength = numbers.length;
  var toptachy = 500
  ctx.font = fontsizetachy + "px helvetica";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (num = 0; num < nlength; num++) {
    //all evens
    //if (Math.abs(num % 2) === 1) { continue; }
    //all odds
    //if (num % 2 === 0) { continue; }
    //only 10s
    //if (num % 20 !== 0) { continue; }
    ang = (numbers[num]) * Math.PI / (lastnumouter/2);
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.7);
    ctx.rotate(-ang);
      ctx.save();
      //ctx.rotate(ang);
      ctx.fillStyle="black";
      ctx.fillText(numbers[num].toString(), 0, 0);
      ctx.restore();
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.7);
    ctx.rotate(-ang);
  }
}

function drawNumbers(ctx, radius,count,fontsize,font,location) {
  var ang;
  var num;
  ctx.font = radius * fontsize + "px "+font;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (num = 1; num < count+1; num++) {
    ang = num * Math.PI / (count/2);
    ctx.rotate(ang);
    ctx.translate(0, -radius * location);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * location);
    ctx.rotate(-ang);
  }
}

function drawBatons(ctx, radius,x,y,count,width,length) {
  var ang;
  var num;
  var location = (radius-length/2);
  
  ctx.save();
  ctx.translate(x,y)
  for (num = 1; num < count+1; num++) {
    ang = num * Math.PI / (count/2);
    ctx.rotate(ang);
    ctx.translate(0, -location);
    ctx.rotate(-ang);
    ctx.beginPath();
    //circle
    //ctx.arc(0, 0, batonradius, 0, 2 * Math.PI);
    //or rectangle
    ctx.save();
      ctx.rotate(ang);
      ctx.rect(-width/2,-length/2,width,length);
      ctx.fill();
    ctx.restore();
    ctx.rotate(ang);
    ctx.translate(0, location);
    ctx.rotate(-ang);
  }
  ctx.restore();
}

function drawDate(ctx,height,x,y,font) {
  var d = new Date();
  var date = d.getDate();
  var width = height*radius * 1.3;
  ctx.font = height*radius + "px "+font;
  ctx.fillText(date.toString(), x, y);
  ctx.rect(x - width / 2, y - height*radius / 2, width, height*radius);
  ctx.stroke();
}

function drawSubdial(ctx, radius,x,y) {
  var smallradius = radius * 0.3;
    
  //draw small seconds circle
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, smallradius, 0 * Math.PI, 2 * Math.PI);
  ctx.stroke();
  
  //draw small seconds circle inside
  //ctx.beginPath();
  // ctx.arc(x, y, smallradius*.8, 0 * Math.PI, 2 * Math.PI);
  // ctx.stroke();
  
  //draw small seconds circle
  ctx.beginPath();
  ctx.arc(x, y, smallradius*0.04, 0 * Math.PI, 2 * Math.PI);
  ctx.strokeStyle = "Blue";
  ctx.lineWidth = radius*0.04;
  ctx.stroke();
  ctx.fillStyle = "Grey";
  ctx.fill();

  ctx.restore();
}

function drawLogo(text,font,location,fontsize) {
  var scale = (radius/100)*.09
  var location 
  location = radius * location
  var font 
  ctx.font = radius*fontsize + "px " + font;
  ctx.fillText(text, 0, -location);
  //or Grab an Image
  //base_image = new Image();
  //base_image.src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  //ctx.drawImage(base_image, -base_image.width*scale/2, -location-base_image.height*scale/2, base_image.width*scale, base_image.height*scale);
}

function drawTime(ctx, radius) {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var millisecond = now.getMilliseconds();
  hour = hour % 12;
  hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
  minute = (minute * Math.PI / 30) + ((second) * Math.PI / (30 * 60));
  second = ((second + (millisecond / 1000)) * Math.PI / 30);
  millisecond = (millisecond * Math.PI / 500);
  
  //mainaxis
  drawHand(ctx, hour, radius * 0.6, radius * 0.03,0,0,flatswordHand);
  drawHand(ctx, minute, radius * 0.95, radius * 0.03,0,0,flatswordHand);
  //drawHand(ctx, second, radius * 1, radius * 0.02,0,0,grandeSeconde);
  
  //6 o clock subdial
  drawHand(ctx, second, radius * 0.25, radius * 0.02,0, radius * 0.5,grandeSeconde);
  
  //9 o clock subdial
  //drawHand(ctx, second, radius * 0.2, radius * 0.01,-radius*.4, 0,grandeSeconde);
}

function drawHand(ctx, pos, length, width,x,y,handshape) {
  ctx.lineWidth = radius*0.01;
  ctx.save();
  ctx.beginPath();
  ctx.translate(x,y)
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
    handshape(ctx,pos,length,width);
  ctx.rotate(-pos);
  ctx.restore();
}

function flatHand(ctx, pos, length, width) {
  ctx.rect(-width/2, 0, width, -length);
  ctx.fillStyle = "Blue";
  ctx.fill();
}

function flatswordHand(ctx, pos, length, width) {
  length2 = length*0.95
  ctx.rect(-width/2, 0, width, -length2);
  ctx.fillStyle = "Blue";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(-width/2,-length2);
  ctx.lineTo(0,-length);
  ctx.lineTo(width/2,-length2);
  ctx.lineTo(0,0);
  ctx.fill();
}

function grandeSeconde(ctx, pos, length, width) {
  ctx.moveTo(0,-length);
  ctx.lineTo(width*0.2,-length);
  ctx.lineTo(width/2,length/4);
  ctx.lineTo(-width/2,length/4);
  ctx.lineTo(-width*0.2,-length);
  ctx.fillStyle ="blue"
  ctx.fill();

}

function feuille(ctx, pos, length, width) {
  ctx.bezierCurveTo(width/2,-length/5,width/2,-length/3,0,-length);
  ctx.fill();
  ctx.moveTo(0,0)
  ctx.bezierCurveTo(-width/2,-length/5,-width/2,-length/3,0,-length);
  ctx.fill();
}

}

}
})();
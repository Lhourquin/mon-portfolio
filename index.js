console.clear();
let angle = 360/4;
let finalAngle = -360;

const circleContainer = document.querySelectorAll(".network");



circleContainer.forEach(circle =>{
  
  
  finalAngle -=90;
  
  circle.style.transform = `rotate(${angle}deg)`;
  circle.style.setProperty("--start-angle-of-rotation", `-${angle}deg`);
  circle.style.setProperty("--end-angle-of-rotation", `${finalAngle}deg`);
  
  
  angle += 90;
  
});


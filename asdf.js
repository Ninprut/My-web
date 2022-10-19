let sMin = 2; 
let time = sMin * 60; 
let countdown = setInterval(update, 1000) 
function update() {
  let min = Math.floor(time / 60);
  let sec = time % 60;
  sec = sec < 10 ? '0' + sec : sec;
  console.log(`${min}:${sec}`);
  time--;
  min == 0 && sec == 0 ? clearInterval(countdown) : countdown;
  
}
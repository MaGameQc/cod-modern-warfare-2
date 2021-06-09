window.onload = function(){
let bodyEl = document.querySelector("body");
let alpha = 1;
let state = 1;
let speed = 0.005;
window.setInterval(() => {
    if(alpha > 0 && state == 1){
        alpha = alpha - speed;
    }
    if(alpha <= 0 && state == 1){
        state = 2;
        alpha = alpha + speed;
    }
    if(alpha > 0 && state == 2){
        alpha = alpha + speed;
    }

    if(alpha >= 1 && state == 2){
        state = 1;
        alpha = alpha + speed;
    }
    bodyEl.style.backgroundImage = `radial-gradient(ellipse at bottom left, rgba(238, 194, 0, ${alpha}) 0%, rgba(100,100,100,1) 40%)`;
}, 1);
}
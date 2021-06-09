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

class Menu {
    constructor(){
        this.menuItems = document.querySelectorAll(".card");
        this.backgroundImg = document.querySelector(".soldierCont__ghost");

        this.imgSources = [
            "images/ghost.png",
            "images/bgSoldier.png",
            "images/bgSoldier2.png",
        ];

        this.addHoverListeners(this.menuItems);
    }
    addHoverListeners(elements){
        elements.forEach((element, index)=>{
            element.addEventListener("mouseover", ()=>{
                this.backgroundImg.src = this.imgSources[index];
            });
        });
    }
}

class AudPlayer{
    constructor(){
        this.audio = new Audio();
        this.audio.src = "sounds/mw2song.m4a";

        this.startAudio();
        this.replayAudio();
    }
    startAudio(){
        document.querySelector("body").addEventListener("mouseover", ()=>{
            this.audio.play();            
        });
    }
    replayAudio(){
        this.audio.addEventListener("timeupdate", ()=>{
            if(this.audio.currentTime >= this.audio.duration){
                console.log("replay");
                this.audio.currentTime = 0;
                audio.play();
            }
        });
    }
}

// let audPlayer = new AudPlayer();



let menu = new Menu();
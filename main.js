song="";

function setup(){
    canvas=createCanvas(600, 500);
    canvas.position(665, 350);
    video=createCapture(VIDEO);
    video.hide();
}

function preload(){
    song=loadSound("1.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
}

function stop(){
    song.stop();
}

function pause(){
    song.pause();
}


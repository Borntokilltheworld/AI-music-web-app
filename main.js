song1 = "";
song2 = "";
function setup(){
    video = createCapture(VIDEO);
   video.hide()
    
    canvas = createCanvas(600,500);
    canvas.center()
}
function draw(){
    image(video,0,0,600,500);
}
function preload(){
song1 = loadSound("The Avengers Theme Song.mp3");
song2 = loadSound("CWs The Flash.mp3");
}
    
song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    posenet = ml5.poseNet(video,ModelLoaded);
    posenet.on('pose',gotPoses);
}
function ModelLoaded(){
    console.log('Posenet is Initialized');
}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX , "leftWristY = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX,"rightWristY = "+rightWristY);
    }
}
function draw(){
    image(video,0,0,600,500);
}
function preload(){
song1 = loadSound("The Avengers Theme Song.mp3");
song2 = loadSound("CWs The Flash.mp3");
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

    
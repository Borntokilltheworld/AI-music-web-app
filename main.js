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
        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreleftWrist = "+scoreleftWrist);
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
    fill("#FF000");
    stroke("#FF000");
    if(scoreleftWrist>0.2){
    circle(leftWristX,leftWristY,20);
    song1.stop();
    if(song_status == false){
        song2.play;
        document.getElementById("song").innerHTML = "The flash theme song is playing now";
    }
    }
    
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

    
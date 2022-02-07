song1 = "";
song2 = "";
song1_status = "";
song2_status = "";
scoreleftwrist = 0;
scorerightwrist = 0;
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;

function setup(){

    video = createCapture(VIDEO);
   video.hide()
    
    canvas = createCanvas(600,500);
    canvas.center();

    posenet = ml5.poseNet(video,ModelLoaded);
    posenet.on("pose",gotPoses);
}
function draw(){
    image(video,0,0,600,500);
    song1_status = song1.isPlaying();
    song2_status = song2.isPlaying();
    fill("#FF000");
    stroke("#FF000");
    if(scorerightWrist>0.2){
        circle(rightWristX,rightWristY,20);
        song2.stop();
        if(song1_status==false){
            song1.play();
            document.getElementById("song").innerHTML = "The avengers theme song is playing";
        }
    }
    if(scoreLeftWrist>0.2){
        circle(leftWristX,leftWristY,20);
        song1.stop();
        if(song2_status == false){
            song2.play();
            document.getElementById("song").innerHTML = "The flash theme song is playing"
        }
    }
}
function preload(){
song1 = loadSound("The Avengers Theme Song.mp3");
song2 = loadSound("CWs The Flash.mp3");
}
function ModelLoaded(){
    console.log("Posenet is Initialized")
}
    function gotPoses(results){
        if(results.length > 0 ){
            console.log(results);
            scoreleftWrist = results[0].pose.keypoints[9].score;
            scorerightWrist = results[0].pose.keypoints[10].score;
            console.log("scorerightwrist = "+scorerightWrist+"scoreleftwrist ="+scoreLeftWrist);
            console.log("scoreleftWrist = "+scoreleftWrist);
            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;
            console.log("leftWristX = "+leftWristX , "leftWristY = "+leftWristY);
    
            rightWristX = results[0].pose.rightWrist.x;
            rightWristY = results[0].pose.rightWrist.y;
            console.log("rightWristX = "+rightWristX,"rightWristY = "+rightWristY);
        }
    }
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
    
song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

song1_stat = "" ;
song2_stat = "" ;


function preload(){
     song1 = loadSound("whip-110235.mp3");
     song2 = loadSound("music.mp3");
}




function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist= results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = "+ scoreLeftWrist + "scoreLeftWrist = "+ scoreLeftWrist);
        results[0].pose.keypoints[10].score;
    
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
       
       
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    
    }}
    
    

function draw(){
    image(video,0,0,600,500);

    song1_stat = song1.isPlaying();
    song2_stat = song2.isPlaying();

    fill("#0000FF");
    stroke("#0000FF");

    if(scoreRightWrist>0.2){

    circle(rightWristX,rightWristY,20);

    song2.stop();

  if(song1_stat = false){

    song1.play();
    document.getElementById("sname").innerHTML = "Playing Whip by Vaanika";

  }
    }

    if(scoreLeftWrist>0.2){

        circle(leftWristX,leftWristY,20);
    
        song1.stop();
    
      if(song2_stat = false){
    
        song2.play();
        document.getElementById("sname").innerHTML = "Playing Star by Maanvi";
        
      }
        }

}





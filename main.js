noseX = 0;
noseY = 0;

function preload() {
 clown_nose = loadImage('https://i.postimg.cc/J4vR9fwF/455-4557163-icon-clown-nose-circle-hd-png-download-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -25;
        noseY = results[0].pose.nose.y -20;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 60, 40);
}

function take_snapshot(){
    save("Sanvi'sFilterImage.png");
}
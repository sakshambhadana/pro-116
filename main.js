noseX=0;
noseY=0;
noseX=0;

preload() 
{
    clown_nose = loadImage('https://i.postimg.cc/pLjw4Y3t/m.png')
}

setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}


function modelLoaded(){
    console.log('poseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x-15;
      noseY = results[0].pose.nose.y-15;
      console.log("nose x =" + noseX); 
      console.log("nose y =" + noseY); 
    }
}

draw()
{
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    image(clown_nose, noseX, noseY, 35, 35);
}

function take_snapshot(){
    save('myFilterImage.png');
}

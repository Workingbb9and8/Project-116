var noseX = 0
var noseY = 0


function preload()
{
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png ')
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 55, 55);
}

function take_Snapshot()
{
    save("myfilterimage.png");
}

function modelLoaded()
{
    console.log("Model is loaded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 25;
        noseY = results[0].pose.nose.y - 12;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
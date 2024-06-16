status = "";








function setup()
{
    canvas = createCanvas();
    canvas.center
    video = createCapture(VIDEO);
    video.hide;
    video.size(380, 480)
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById(status).innerHTML = "Status - Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}

function draw()
{
    image(video, 0, 0, 480, 380);
}
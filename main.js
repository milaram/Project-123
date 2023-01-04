function getResults(){

    var box = document.getElementById("write").value;
}

function setup(){

    var video = createCapture(VIDEO);
    video.size(550, 500);

    var canvas = createCanvas(550, 550);
    canvas.position(550, 160);

    var posenet = ml5.poseNet(video, modelLoaded);

    posenet.on('pose', gotPoses);
}

function draw(){

    background("#E34234");
    
}

function modelLoaded(){

    console.log('posenet is initialized');
}

function gotPoses(results){

if (results.length > 0){
console.log(results);
}
}

function click(){

    canvas = box
}



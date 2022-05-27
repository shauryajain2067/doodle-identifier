function preload(){
classifier=ml5.imageClassifier('DoodleNet',modelLoaded);
}
function modelLoaded(){
    console.log("DoodleNet is initilized");
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
background("white");
canvas.mouseReleased(canvasClassify)
synth = window.speechSynthesis;
}

function draw(){
strokeWeight(10);
stroke(0);

if(mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY);
}
}

function clearCanvas(){
background("white");
}

function canvasClassify(){
classifier.classify(canvas,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("label").innerHTML="label = " + results[0].label;
        document.getElementById("Confidence").innerHTML="confidence = " + Math.round(results[0].confidence*100) + "%";
        utterThis = new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);
    }
}



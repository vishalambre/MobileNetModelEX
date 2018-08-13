

let mobilenet;
// let animalImg;
let video;
let label;

function modelReady(){
    console.log("Model is ready");
    mobilenet.predict(gotResults);
}

function imageReady(){
    // image(animalImg,0,0,width,height)
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        // console.log(results);
        // console.log(`${results[0].className} is the animal with a probablity of ${(results[0].probability*100).toFixed(2)}%`);
        mobilenet.predict(gotResults);
        label = results[0].className;
    }
}

function setup(){
createCanvas(640,480);

// animalImg = createImg("testImages/17.jpg",imageReady);
// animalImg.hide();
video = createCapture(VIDEO);
video.hide();
background(0);
mobilenet = ml5.imageClassifier("MobileNet",video,modelReady);
}

function draw(){
    background(0);
  image(video, 0, 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
}
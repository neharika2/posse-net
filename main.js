nosex=0;
nosey=0;



function preload(){
}
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes)
};
function gotposes(results){
if(results.length>0){
console.log(results);
nosex=results[0].pose.nose.x;
nosey=result[0].pose.nose.y;
console.log ("nose x" +nosex);
console.log ("nose y" + nosey);
}
}
function modelloaded(){
    console.log("model is loaded");
}
function draw(){
    
    image(video,0,0,300,300);

    fill(48,213,200);
    stroke(48,213,200)
    circle(nosex,nosey,20);
}
function take_snapshot(){
    save('myFilterImage.png');
}

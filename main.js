function setup() {
    canvas = createCanvas(380, 380);
    canvas.position(750,180);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,0,0,380,380);

}

function modelLoaded() {
    console.log("Model Is Injected");
}


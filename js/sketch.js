var mySong, amplitude,  play;

function preload (){
    mySong = loadSound('assets/massiveAttackAngel.mp3');
}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");
    mySong.play();
    background(0);
    noStroke();
    amplitude = new p5.Amplitude();
    console.log(amplitude);

    var button = createButton("Play");
    button.center();
    button.addClass('btn');

    button.mousePressed(function() {
        play = true;
        mySong.play();
        button.hide();
    });

}

function draw() {
    if(play == true){
        var level = amplitude.getLevel();
        var vol = map(level, 0, 1, 0, 1000);
        var col = map(level, 0, 1, 0, 255);
        background(col);
        console.log(amplitude.getLevel());

        fill(255, col, 0);
        ellipse(width/2, height/2, vol);
        
        fill(100, 10, col);
        ellipse(width/2, height/2, vol/2);
    
        rectMode(CENTER);
        fill(col,255,255);
        square(width/4,height/4,vol)
    
        rectMode(CENTER);
        fill(col,255,255);
        square(width-width/4,height-height/4,vol);
        
        rectMode(CENTER);
        fill(col,255,255);
        square(width-width/4,height/4,vol)
        
        rectMode(CENTER);
        fill(col,255,255);
        square(width/4,height-height/4,vol)
    }
}

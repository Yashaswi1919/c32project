const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg1 ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(bg1)
     background(bg1);
    Engine.update(engine);

    // write code to display time in correct format here
    fill("black");
    
    textSize(30); 
    if(hour>=12){
     text("Time : "+ hour%12 + " PM", 50,100); 
    }else if(hour==0){
     text("Time : 12 AM",100,100); 
    }else{ text("Time : "+ hour%12 + " AM", 50,100); }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response=await fetch("https://worldtimeapi.org/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
    console.log(responseJSON);

    //change the data in JSON format
    var dt=responseJSON.datetime;
    console.log(dt);

    // write code slice the datetime
    var sli=dt.slice(11,19);
    console.log(sli);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06) {
        debugger; 
        bg = "sunrise1.png";
    }else if(hour>=06 && hour<=08){
        debugger; 
        bg="sunrise2.png";
    }else if(hour>=08 && hour<=10){
        debugger; 
        bg="sunrise3.png";
    }else if(hour>=09 && hour<=03){
        debugger; 
        bg="sunrise4.png"
    }else if(hour>=23 && hour<=04){
        debugger; 
        bg ="sunrise5.png"
    }else if(hour>=11 && hour<=05){
        debugger; 
        bg="sunrise6.png"
    }else if(hour>=21 && hour<=09){
        debugger; 
        bg="sunset7.png"
    }else if(hour>=7 && hour<=12){
        debugger; 
        bg="sunset8.png"
    }else if(hour>=22 && hour<=21){
        debugger; 
        bg="sunset9.png"
    }else if(hour>=14 && hour<=05){
        debugger; 
        bg="sunset10.png"
    }else if (hour>=16 && hour<=19){
        debugger; 
        bg="sunset11.png"
    }else if(hour>=15 && hour<=24){
         debugger; 
        bg="sunset12.png"
    }


    //load the image in backgroundImg variable here
    bg1=loadImage(bg);
    console.log(bg1);
}

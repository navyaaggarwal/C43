var title;
var helloButton;

function setup() {
  createCanvas(800,700);

  title = createElement("h2");
    title.position(400, 350);
    title.html("Hello");

    helloButton = createButton("Create");
    helloButton.position(500, 450);

    button2 = createButton("Reset");
    button2.position(600, 550);

    button3 = createButton("Change");
    button3.position(300,300);

    button4 = createButton("Press");
    button4.position(200, 300);
    
    createButtonPressed();
    
}
function draw() {}

function createButtonPressed(){
  helloButton.mousePressed(()=>{
    background("yellow");
    helloButton.hide();
    button3.hide();
    button4.hide();
    button2.show();
    changeBackground();
    title.hide();
    
  });
  button2.mousePressed(()=>{
    background("red");
    helloButton.hide();
    button2.hide();
    button4.hide();
    button3.show();

  });
  button3.mousePressed(()=>{
    background("blue");
    helloButton.hide();
    button3.hide();
    button2.hide();
    button4.show();

  });
  button4.mousePressed(()=>{
    background("green");
    button2.hide();
    button3.hide();
    button4.hide();
    helloButton.show();
    
  });
}

function changeBackground() {
  var r = Math.round(random(1,5));
  switch (r) {
    case 1: {
      background("red");
      break;
    }
    
    case 2: {
      background("pink");
      break;
    }

    case 3: {
      background("orange");
      break;
    }

    case 4: {
      background("black");
      break;
    }

    case 5: {
      background("blue");
      break;
    }
  }
}
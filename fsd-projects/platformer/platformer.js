$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0,150,150,20)
createPlatform(100,275,100,20)
createPlatform(35,1,20,100)
createPlatform(200,1,20,600)
createPlatform(0,400,100,20)
createPlatform(100,525,100,20)
createPlatform(375, 100, 20, 650);
createPlatform(0,650,100,20);
createPlatform(325,650,70,20);
createPlatform(200,525,100,20);
createPlatform(325,400,70,20);
createPlatform(200,275,100,20)
createPlatform(325,150,70,20)
createPlatform(390,100,850,20)
createPlatform(500,275,1000,20)
createPlatform(390,425,850,20)
createPlatform(500,625,1000,20)
createPlatform(10,1,20,1000)
createPlatform(1380,1,20,1000)

    // TODO 3 - Create Collectables
createCollectable("database",180,300,0,0)
createCollectable("database",400,110,0,0)
createCollectable("database",1200,700,0,0)


    
    // TODO 4 - Create Cannons
createCannon("top",200,2000)
createCannon("top",150,2000)
createCannon("bottom",255,2400)
createCannon("bottom",210,2400)
createCannon("top",215,2000)
createCannon("top",140,2000)
createCannon("bottom",265,2400)
createCannon("right",260,2000)
createCannon("right",590,2500)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

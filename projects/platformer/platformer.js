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
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    for (let i = 100; i < canvas.width; i += 100) {
    createPlatform(i, canvas.height, -1, -canvas.height);
    }
    for (let i = 100; i < canvas.height; i += 100) {
    createPlatform(canvas.width, i, -canvas.width, -1);
    }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(300,603,100,10)
    createPlatform(500,500,100,10)
    createPlatform(700,400,100,10)
    createPlatform(900,300,100,10)
    createPlatform(1100,200,100,10)
    createPlatform(500,300,100,10)
    createPlatform(300,200,100,10)
    createPlatform(900,500,100,10)
    createPlatform(1100,603,100,10)
    createPlatform(700,200,100,10)
    createPlatform(700,603,100,10)
    createPlatform(1300,400,100,10)
    createPlatform(1100,400,100,10)
    createPlatform(300,400,100,10)
    createPlatform(100,400,100,10)
    createPlatform(100,200,100,10)
    createPlatform(1300,200,100,10)
    createPlatform(500,100,100,10)
    createPlatform(1000,300,5,200)
    createPlatform(100,200,5,200)
    createPlatform(800,400,5,200)
    createPlatform(900,100,100,10)
    createPlatform(500,100,5,300)
    





    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable('coin', 540, 350, 0.1, 1)
    createCollectable('coin', 740, 450, 0.1, 1)
    createCollectable('coin', 940, 350, 0.1, 1)
    createCollectable('coin', 1140, 250, 0.1, 1)
    createCollectable('coin', 1340, 250, 0.1, 1)
    createCollectable('coin', 340, 250, 0.1, 1)
    createCollectable('coin', 340, 50, 0.1, 1)
    createCollectable('coin', 140, 250, 0.1, 1)
    createCollectable('coin', 1140, 50, 0.1, 1)
    createCollectable('coin', 1340, 50, 0.1, 1)
    createCollectable('coin', 940, 0, 0.1, 1)
    createCollectable('coin', 540, 0, 0.1, 1)
    createCollectable('coin', 740, 250, 0.1, 1)
    createCollectable('coin', 740, 100, 0.1, 1)











    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("bottom", 400, 1110, 50, 30)
    createCannon("bottom", 600, 1110, 50, 30)
    createCannon("bottom", 800, 1110, 50, 30)
    createCannon("bottom", 1000, 1110, 50, 30)
    createCannon("bottom", 1200, 1110, 50, 30)
    







    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});

type KeyInput = "up" | "down" | "left" | "right";

// Better way to do it
enum Direction {
    // If you do not give them values then they automatically populate as 
    // 0, 1, 2, 3, etc ...
    Up = "up", // if you give Up = 1 then the rest auto-populate
    Down = "down",
    Left = "left",
    Righ = "right",
}

// function doSomething(keyPressed: KeyInput){
//     // do something
// }

function doSomething(keyPressed: Direction){
    // do something
    if (keyPressed == Direction.Up){

    }
}

// doSomething("up");
// doSomething("down");
// doSomething("dowgrandomg");

doSomething(Direction.Up);
doSomething(Direction.Down);

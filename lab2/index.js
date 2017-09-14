const printShape = require("./printShape");

function getInfo(){
    console.log("Displaying 10 triangles");
    printShape.triangle(1);
    printShape.triangle(2);
    printShape.triangle(5);
    printShape.triangle(3);
    printShape.triangle(5);
    printShape.triangle(4);
    printShape.triangle(1);
    printShape.triangle(3);
    printShape.triangle(5);
    printShape.triangle(2);
    console.log("Displaying 10 squares");
    printShape.square(2);
    printShape.square(5);
    printShape.square(3);
    printShape.square(5);
    printShape.square(7);
    printShape.square(6);
    printShape.square(4);
    printShape.square(3);
    printShape.square(2);
    printShape.square(6);
    console.log("Displaying 10 rhombi");
    printShape.rhombus(2);
    printShape.rhombus(4);
    printShape.rhombus(6);
    printShape.rhombus(8);
    printShape.rhombus(2);
    printShape.rhombus(4);
    printShape.rhombus(6);
    printShape.rhombus(10);
    printShape.rhombus(2);
    printShape.rhombus(4);
}
getInfo();
const {expect} = require("chai");
import Shape from "./shape";
import Rectangle from "./rectangle";
import Square from "./square";


describe("Rectangle:", () => {
  const rectangle = new Rectangle(6,5);
  it("Should instantiate Rectangle class ", () =>{
    expect(rectangle).to.be.an.instanceof(Rectangle);
  });

  it("Should return name of rectangle", () =>{
    expect(rectangle.name).to.equal("Rectangle");
  });

  it("Should return the area of rectangle", () =>{
    let area = rectangle.area;
    expect(area).to.equal(30);
  });

  it("Should return the perimeter of rectangle", () =>{
    let area = rectangle.perimeter;
    expect(area).to.equal(22);
  });

});

describe("Square:", () => {
  const square = new Square(6);
  it("Should instantiate Square class ", () =>{
    expect(square).to.be.an.instanceof(Square);
  });

  it("Should return name of square", () =>{
    expect(square.name).to.equal("Square");
  });

  it("Should return the area of square", () =>{
    let area = square.area;
    expect(area).to.equal(36);
  });

  it("Should return the perimeter of square", () =>{
    let area = square.perimeter;
    expect(area).to.equal(24);
  });

});

describe("Shape:", () => {

  const shape = new Shape;
  it("Should return name of shape", () =>{
    expect(shape.printName()).to.equal("Shape");
  });

});

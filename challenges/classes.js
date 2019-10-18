// 1. Copy and paste your prototype in here and refactor into class syntax.
class CubiodMakerclass {
    constructor(cDems) {
        this.length = cDems.length;
        this.width = cDems.width;
        this.height = cDems.height;
    }
    volume = function() {
        return (this.length * this.width * this.height);
    }
    surfaceArea = function() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}
const cuboidclass = new CubiodMakerclass({
        length: 4,
        width: 5,
        height: 5
    })
    // Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CubiodMaker {
    constructor(cDems) {
        super(cDems);
    }
    cubeVolume = function() {
        return (this.length * 3);
    }
    cubeSurface = function() {
        return (6 * this.length * this.width)
    }
}
const cubeObj = new CubeMaker({
    length: 8,
    width: 8,
    height: 8
})
console.log(cubeObj.cubeVolume());
console.log(cubeObj.cubeSurface());
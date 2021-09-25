function howManyHundreds(num) {
  numOfShips = Math.floor(num / 100);
  return numOfShips;
}

function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    const rectangleArea = length * width;
    return rectangleArea;
  }
}

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    const triangleArea = (base * height) / 2;
    return triangleArea;
  }
}

function calcuateCircleArea(radius) {
  if (radius < 0) {
    return undefined;
  } else {
    const circleArea = Math.PI * radius * radius;
    return circleArea;
  }
}

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  const newArray = [array, ...element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  const newArray = array.push(element);
  return newArray;
}

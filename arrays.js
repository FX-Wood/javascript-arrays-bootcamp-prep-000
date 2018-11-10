var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  const newArray = array.unshift(element);
  return newArray;
}

function addElementToEndOfArray(array, element) {
  const newArray = [array, ...element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}

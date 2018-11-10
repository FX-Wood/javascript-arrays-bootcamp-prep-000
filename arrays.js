var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  const newArray = [array, ...element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = array.push(element)
  return array
}

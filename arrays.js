var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  const newArray = array
  newArray.unshift(element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)

}

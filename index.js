function findMinAndRemove(array){
  let first = array[0]
  let index = 0
  for (let i=0; i<array.length; i++){
    if (array[i]<first){
      first = array[i]
      index = i
    }
  }
  array.splice(index, 1)
  return first
}

function insertionSort(array){
  let sorted = []
  while (array.length != 0){
    sorted.push(findMinAndRemove(array))
  }
  return sorted
}

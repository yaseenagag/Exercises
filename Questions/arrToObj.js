function fromListToObject(input) {
  let array = [...input],
    result = {};
    console.log('array', array);
  
  for (var index = 0; index < array.length; index++) {
    for (var y = 0; y < array.length; y++) {
      result[array[index].slice(0,1)] = array[index].slice(1,2)[0]
    }
  }
  return result;
}

fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]);